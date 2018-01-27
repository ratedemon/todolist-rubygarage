import Router from 'koa-router';
import User from './models/user/model';
import Project from './models/project/model';
import Task from './models/task/model';
import koaBody from 'koa-body';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import env from 'dotenv';
import verifyAuth from './middleware/authMiddleware';

env.config();

const router = new Router();

router.use(koaBody());

router.post('/register', async ctx => {
    try {
        const hash = await bcrypt.hash(ctx.request.body.password, 10);
        const user = await User.create({
            name: ctx.request.body.name,
            email: ctx.request.body.email,
            password: hash
        });
        console.log(user);
        ctx.body = user;
    } catch (e) {
        console.log(e);
        ctx.throw(500, {
            error: e
        });
    }
});

router.post('/login', async ctx =>{
    console.log(ctx.request.body.password);
    const user = await User.findOne({
        where: {
            email: ctx.request.body.email
        }
    });
    if(!user) return ctx.throw(404);
    try{
        const compare = await bcrypt.compare(ctx.request.body.password, user.password);
        if(compare){
            const token = await jwt.sign({
                id: user.id,
                email: user.email
            }, process.env.JWT_KEY, {
                expiresIn: "3h"
            });
            ctx.body = token;
        } else {
            ctx.throw(409);
        }
    }catch(e){
        console.log(e);
        ctx.throw(403);
    }
    // const
});

router.post('/project', verifyAuth, async ctx =>{
    console.log(ctx.request.body);
    try{
        const project = await Project.create({
            name: ctx.request.body.name,
            user_id: ctx.request.body.id
        });
        ctx.body = project;
    }catch(e){
        console.log(e);
        ctx.throw(400)
    }
});

router.post('/task', verifyAuth, async ctx => {
    console.log(ctx.request.body);
    const project = await Project.findOne({
        where: {
            id: ctx.request.body.project_id,
            user_id: ctx.request.body.id
        }
    });
    if(!project) return ctx.throw(403);
    try{
        const task = await Task.create({
            name: ctx.request.body.name,
            project_id: ctx.request.body.project_id
        });
        ctx.body = task;
    }catch(e){
        console.log(e);
        ctx.throw(400);
    }
});

router.put('/project', verifyAuth, async ctx => {
     console.log(ctx.request.body);
     try{
         const project = await Project.update({
             name: ctx.request.body.name
         },{
             where: {
                 user_id: ctx.request.body.id,
                 id: ctx.request.body.project_id
             }
         });
         ctx.body = project;
     }catch(e){
         ctx.throw(403);
     }
});

router.put('/task', verifyAuth, async ctx => {
    const project = await Project.findOne({
        where: {
            id: ctx.request.body.project_id,
            user_id: ctx.request.body.id
        }
    });
    if(!project) return ctx.throw(403);
    try{
        const task = await Task.update({
                name: ctx.request.body.name,
            },
            {
                where: {
                    project_id: ctx.request.body.project_id,
                    id: ctx.request.body.task_id
                }
            }
        );
        if(task[0]){
            return ctx.body = task;
        }else{
            return ctx.throw(403);
        }
    }catch(e){
        console.log(e);
        ctx.throw(400);
    }
});

router.put('/task/position', verifyAuth, async ctx => {
    const project = await Project.findOne({
        where: {
            id: ctx.request.body.project_id,
            user_id: ctx.request.body.id
        }
    });
    if(!project) return ctx.throw(403);
    try{
        const task = await Task.update({
                position: ctx.request.body.position,
            },
            {
                where: {
                    project_id: ctx.request.body.project_id,
                    id: ctx.request.body.task_id
                }
            }
        );
        if(task[0]){
            return ctx.body = task;
        }else{
            return ctx.throw(403);
        }
    }catch(e){
        console.log(e);
        ctx.throw(400);
    }
});

router.delete('/project/:id', verifyAuth, async ctx => {
    console.log(ctx.params.id);
    try{
        const project = await Project.destroy({
            where: {
                id: ctx.params.id,
                user_id: ctx.request.body.id
            }
        });
        ctx.body = project;
    }catch(e){
        console.log(e);
        ctx.throw(403);
    }
});

router.delete('/project/:project_id/task/:task_id', verifyAuth, async ctx => {
    const project = await Project.findOne({
        where: {
            id: ctx.params.project_id,
            user_id: ctx.request.body.id
        }
    });
    if(!project) return ctx.throw(403);
    try{
        const task = await Task.destroy({
            where: {
                id: ctx.params.task_id,
                project_id: ctx.params.project_id
            }
        });
        return ctx.body = task;
    }catch(e){
        console.log(e);
        ctx.throw(400);
    }
});

export function routes() {
    return router.routes();
}
export function allowedMethods() {
    return router.allowedMethods();
}