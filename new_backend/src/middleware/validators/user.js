import {schemaRegister, schemaLogin, schemaSecretCode, schemaForgot} from '../../models/user/schema';
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

async function checkSecretCode(ctx, next){
    const result = Joi.validate(ctx.request.body, schemaSecretCode);
    if(result.error){
        return ctx.status = 400;
    }
    await next();
}

async function checkForgot(ctx, next){
    const result = Joi.validate(ctx.request.body, schemaForgot);
    if(result.error){
        return ctx.status = 400;
    }
    await next();
}

export { checkRegister, checkLogin, checkSecretCode, checkForgot};