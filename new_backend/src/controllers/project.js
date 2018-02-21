/**
 * Created by rated on 28.01.2018.
 */
import Project from '../models/project/model';
import Task from '../models/task/model';
import db from '../db';

export default class ProjectController{
    static async create(ctx){
        try{
            let project = await Project.create({
                name: ctx.request.body.name,
                user_id: ctx.request.body.id
            });
            project.dataValues.ProjectTasks = [];
            return ctx.body = {project: project};
        }catch(e){
            console.log(e);
            return ctx.throw(400)
        }
    }
    static async update(ctx){
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
                ['id', 'DESC'],
                // [db.models.Project,{ model: db.models.Task, as: 'ProjectTasks' }, 'position', 'asc'],
                // [ db.Task, 'position', 'ASC']
                [ db.literal('"ProjectTasks".'), 'id', 'ASC']
            ]
        });
        // console.log(projects);
        ctx.body = projects;
    }
}