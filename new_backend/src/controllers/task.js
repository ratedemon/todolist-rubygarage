/**
 * Created by rated on 28.01.2018.
 */
import Task from '../models/task/model';
import db from '../db';

export default class TaskController {
    static async create(ctx) {
        try {
            const task = await Task.create({
                name: ctx.request.body.name,
                project_id: db.literal(await TaskController.verifyString(ctx))
            });
            ctx.body = task;
        } catch (e) {
            console.log(e);
            ctx.throw(400);
        }
    }

    static async updateName(ctx) {
        try {
            const task = await Task.update({
                name: ctx.request.body.name,
            }, {
                where: {
                    id: ctx.request.body.task_id,
                    project_id: {
                        [db.Op.eq]: db.literal(await TaskController.verifyString(ctx))
                    }
                }
            });
            ctx.body = task;
        } catch (e) {
            console.log(e);
            ctx.throw(400);
        }
    }

    static async delete(ctx) {
        try {
            const task = await Task.destroy({
                where: {
                    id: ctx.params.task_id,
                    project_id: {
                        [db.Op.eq]: db.literal(await TaskController.verifyString(ctx))
                    }
                }
            });
            return ctx.body = task;
        } catch (e) {
            console.log(e);
            ctx.throw(400);
        }
    }

    static async changePosition(ctx) {
        const tasks = ctx.request.body.tasks;
        const project_id = await TaskController.verifyString(ctx);
        try{
            const results = await Promise.all(tasks.map(task => {
                return Task.update({
                    position: task.position
                }, {
                    where: {
                        id: task.id,
                        project_id: {
                            [db.Op.eq]: db.literal(project_id)
                        }
                    }
                })
            }));
            // console.log(result);
            let error = false;
            results.forEach(el => {
                 if(!el[0]){
                     error = true;
                 }
            });
            if(error){
                throw new Error("Not all tasks was updated.");
            }else{
                ctx.status = 200
            }
        }catch(e){
            console.log(e);
            ctx.throw(400, {
                message: e
            });
        }
    }

    static async changeStatus(ctx) {
        try {
            const task = await Task.update({
                    status: ctx.request.body.status,
                },
                {
                    where: {
                        id: ctx.request.body.task_id,
                        project_id: {
                            [db.Op.eq]: db.literal(await TaskController.verifyString(ctx))
                        }
                    }
                }
            );
            if (task[0]) {
                return ctx.body = task;
            } else {
                return ctx.throw(403);
            }
        } catch (e) {
            console.log(e);
            ctx.throw(400);
        }
    }

    static async verifyString(ctx) {
        return `(SELECT id from projects where id=${ctx.request.body.project_id || ctx.params.project_id} and user_id in (SELECT id from users where id=${ctx.request.body.id} and email = '${ctx.request.body.email}'))`;
    }
}