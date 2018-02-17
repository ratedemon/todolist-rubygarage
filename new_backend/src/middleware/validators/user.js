import {schemaRegister, schemaLogin} from '../../models/user/schema';
import Joi from 'joi';

async function checkRegister(ctx, next) {
    const result = Joi.validate(ctx.request.body, schemaRegister);
    console.log(result.error);
    if(result.error){
        return ctx.status = 400;
    }
    await next();
}

async function checkLogin(ctx, next) {
    const result = Joi.validate(ctx.request.body, schemaLogin);
    if(result.error){
        return ctx.status = 400;
    }
    await next();
}

export { checkRegister, checkLogin};