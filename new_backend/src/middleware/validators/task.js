/**
 * Created by rated on 17.02.2018.
 */
import {schemaCreate, schemeChangeStatus, schemeChangePosition, schemeUpdate, schemeDelete} from '../../models/task/schema';
import Joi from 'joi';

async function checkChangeStatus(ctx, next) {
    const result = Joi.validate(ctx.request.body, schemeChangeStatus);
    if(result.error){
        return ctx.status = 400;
    }
    await next();
}

async function checkChangePosition(ctx, next) {
    const result = Joi.validate(ctx.request.body, schemeChangePosition);
    if(result.error){
        return ctx.status = 400;
    }
    await next();
}

async function checkCreateTask(ctx, next) {
    const result = Joi.validate(ctx.request.body, schemaCreate);
    if(result.error){
        return ctx.status = 400;
    }
    await next();
}

async function checkUpdateTask(ctx, next) {
    const result = Joi.validate(ctx.request.body, schemeUpdate);
    if(result.error){
        return ctx.status = 400;
    }
    await next();
}

async function checkDeleteTask(ctx, next) {
    const result = Joi.validate({
        email: ctx.request.body.email,
        id: ctx.request.body.id,
        task_id: ctx.params.task_id,
        project_id: ctx.params.project_id,
    }, schemeDelete);
    if(result.error){
        return ctx.status = 400;
    }
    await next();
}

export { checkChangeStatus, checkCreateTask, checkUpdateTask, checkDeleteTask, checkChangePosition};