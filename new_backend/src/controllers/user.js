/**
 * Created by rated on 28.01.2018.
 */
import User from '../models/user/model';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
// import nodemailer from 'nodemailer';
import env from 'dotenv';
import randomstring from 'randomstring';
import sendEmail from '../mail';

env.config();

export default class UserController{
    static async login(ctx){
        const user = await User.findOne({
            where: {
                email: ctx.request.body.email
            }
        });
        if(!user) return ctx.status = 404;
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
                return ctx.status = 403;
            }
        }catch(e){
            console.log(e);
            return ctx.status = 403;
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
            // console.log(user);

            return ctx.status = 200;
        } catch (e) {
            console.log(e);
            return ctx.status = 500;
        }
    }
    static async getSecretCode(ctx){
        const user = await User.findOne({
            where: {
                email: ctx.request.body.email
            }
        });
        console.log(user);
        const token = await jwt.sign({
            id: user.id,
            email: user.email
        }, process.env.JWT_KEY, {
            expiresIn: "3h"
        });
        const html = `<p>Hello, <b>${user.name}</b>.</p>
            <p>Secret code: <b>${Buffer.from(token).toString('base64')}</b></p>
            <br><br>
            <p><small>If you don't want change password, just, ignore this message.</small></p>`;

        try{
            const transporter = await sendEmail(ctx.request.body.email,'Secret code (forgot password)', html);
            return transporter ? ctx.status = 200 : ctx.status = 403;
        }catch(e){
            console.log(e);
            return ctx.status = 500;
        }
    }
    static async forgot(ctx){
        try{
            const encoded_json = Buffer.from(ctx.request.body.secret, 'base64').toString();
            console.log(encoded_json);
            const encode = await jwt.verify(encoded_json, process.env.JWT_KEY)
        }catch(e){
            console.log(e);
            return ctx.status = 500;
        }
        if(encode.email != ctx.request.body.email){
            return ctx.status = 500;
        }

        const user = await User.findOne({
            where: {
                email: ctx.request.body.email
            }
        });
        if(!user) return ctx.status = 404;
        try{
            const str = randomstring.generate(10);

            const html = `<p>Hello, <b>${user.dataValues.name}</b>!</p>
                <p>Your password has been changed.</p>
                <br>
                <p>Thank you. Have a good day:)</p>
                `;

            const transporter = await sendEmail(ctx.request.body.email,'Forgot password', html);

            if(!transporter){
                return ctx.status = 500;
            }

            const hash = await bcrypt.hash(str, 10);
            console.log(str);
            const updateUser = await User.update({
                password: hash
            },{
                where: {
                    email: ctx.request.body.email
                }
            });
            ctx.status = 200;
        }catch(err){
            console.log(err);
            ctx.status = 500;
        }
    }
    static async changePassword(ctx){
        const user = await User.findOne({
            where: {
                email: ctx.request.body.email
            }
        });
        if(!user) return ctx.status = 404;
        try{
            const compare = await bcrypt.compare(ctx.request.body.old_password, user.password);
            if(compare){
                const hash = await bcrypt.hash(ctx.request.body.new_password, 10);
                const updateUser = await User.update({
                    password: hash
                    },{
                    where: {
                        email: ctx.request.body.email
                    }
                });
                return ctx.status = 200;
            } else {
                return ctx.status = 403;
            }
        }catch(e){
            console.log(e);
            return ctx.status = 403;
        }
    }
}