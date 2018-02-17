/**
 * Created by rated on 17.02.2018.
 */
import {schemaCreate, schemeGet, schemeUpdate, schemeDelete} from '../../models/project/schema';
import Joi from 'joi';

async function checkGetProject(ctx, next) {
    const result = Joi.validate(ctx.request.body, schemeGet);
    if(result.error){
        return ctx.status = 400;
    }
    await next();
}

async function checkCreateProject(ctx, next) {
    const result = Joi.validate(ctx.request.body, schemaCreate);
    if(result.error){
        return ctx.status = 400;
    }
    await next();
}

async function checkUpdateProject(ctx, next) {
    const result = Joi.validate(ctx.request.body, schemeUpdate);
    if(result.error){
        return ctx.status = 400;
    }
    await next();
}

async function checkDeleteProject(ctx, next) {
    console.log(ctx.request.body, ctx.params.id);
    const result = Joi.validate({
        email: ctx.request.body.email,
        user_id: ctx.request.body.id,
        id: ctx.params.id
    }, schemeDelete);
    if(result.error){
        return ctx.status = 400;
    }
    await next();
}

export { checkGetProject, checkCreateProject, checkUpdateProject, checkDeleteProject};