/**
 * Created by rated on 27.01.2018.
 */
import jwt from 'jsonwebtoken';
import env from 'dotenv';

env.config();

async function verifyAuth(ctx, next) {
    const authorization = ctx.headers.authorization;
    if(!authorization || !authorization.match(/^Bearer\s/)){
        ctx.throw(403);
    }
    const token = authorization.replace(/^Bearer\s/, '');
    try{
        const encode = await jwt.verify(token, process.env.JWT_KEY);
        ctx.request.body.id = encode.id;
        ctx.request.body.email = encode.email;
        await next();
    }catch(e){
        console.log(e);
        ctx.throw(403);
    }
}

export { verifyAuth as default };