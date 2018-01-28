/**
 * Created by rated on 28.01.2018.
 */
import Project from '../models/project/model';
import Task from '../models/task/model';

export default class TaskController{
    static async create(ctx){
        const project = await TaskController.verifyProject(ctx);
        // if(!project) return ctx.throw(403);
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
    }
    static async updateName(ctx){
        const project = await TaskController.verifyProject(ctx);
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
    }
    static async delete(ctx){
        const project = await TaskController.verifyProject(ctx);
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
    }
    static async changePosition(ctx){
        const project = await TaskController.verifyProject(ctx);
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
    }
    static async changeStatus(ctx){
        const project = await TaskController.verifyProject(ctx);
        if(!project) return ctx.throw(403);
        try{
            const task = await Task.update({
                    status: ctx.request.body.status,
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
    }
    static async verifyProject(ctx){
        const project = await Project.findOne({
            where: {
                id: ctx.request.body.project_id,
                user_id: ctx.request.body.id
            }
        });
        return project;
    }
}