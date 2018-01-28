/**
 * Created by rated on 28.01.2018.
 */
import User from '../models/user/model';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export default class UserController{
    static async login(ctx){
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
                return ctx.body = {token: token};
            } else {
                return ctx.throw(409);
            }
        }catch(e){
            console.log(e);
            return ctx.throw(403);
        }
    }
    static async register(ctx){
        try {
            const hash = await bcrypt.hash(ctx.request.body.password, 10);
            const user = await User.create({
                name: ctx.request.body.name,
                email: ctx.request.body.email,
                password: hash
            });
            return ctx.status = 200;
        } catch (e) {
            console.log(e);
            return ctx.throw(500, {
                error: e
            });
        }
    }
}