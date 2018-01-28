/**
 * Created by rated on 28.01.2018.
 */
import Project from '../models/project/model';
import Task from '../models/task/model';

export default class ProjectController{
    static async create(ctx){
        console.log(ctx.request.body);
        try{
            const project = await Project.create({
                name: ctx.request.body.name,
                user_id: ctx.request.body.id
            });
            return ctx.body = project;
        }catch(e){
            console.log(e);
            return ctx.throw(400)
        }
    }
    static async update(ctx){
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
            return ctx.body = project;
        }catch(e){
            return ctx.throw(403);
        }
    }
    static async delete(ctx){
        console.log(ctx.params.id);
        try{
            const project = await Project.destroy({
                where: {
                    id: ctx.params.id,
                    user_id: ctx.request.body.id
                }
            });
            return ctx.body = project;
        }catch(e){
            console.log(e);
            return ctx.throw(403);
        }
    }
    static async getProjectsWithTasks(ctx){
        const projects = await Project.findAll({
            where: {
                user_id: ctx.request.body.id
            },
            include: [
                {
                    model: Task,
                    as: 'ProjectTasks'
                }
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        console.log(projects);
        ctx.body = projects;
    }
}