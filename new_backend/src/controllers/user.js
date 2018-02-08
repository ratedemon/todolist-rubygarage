/**
 * Created by rated on 28.01.2018.
 */
import User from '../models/user/model';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import nodemailer from 'nodemailer';
import env from 'dotenv';
import randomstring from 'randomstring';

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
            return ctx.status = 200;
        } catch (e) {
            console.log(e);
            return ctx.status = 500;
        }
    }
    static async forgot(ctx){
        const user = await User.findOne({
            where: {
                email: ctx.request.body.email
            }
        });
        if(!user) return ctx.status = 404;
        try{
            let transporter = nodemailer.createTransport({
                service: process.env.SMTP_SERVICE,
                auth: {
                    user: process.env.SMTP_EMAIL,
                    pass: process.env.SMTP_PASS
                }
            });

            const str = randomstring.generate(10);
            const hash = await bcrypt.hash(str, 10);
            console.log(str);
            const updateUser = await User.update({
                password: hash
            },{
                where: {
                    email: ctx.request.body.email
                }
            });

            let mailOptions = {
                from: `"RubyTodo" <${process.env.SMTP_EMAIL}>`,
                to: ctx.request.body.email,
                subject: 'Forgot password',
                text: 'Hello world?',
                html: `<p>Hello, <b>${user.dataValues.name}</b>!</p>
<p>Your password has been change to <b>${str}</b> .</p>
<br>
<p>Thank you. Have a good day:)</p>
`
            };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                    return ctx.status = 500;
                }
                console.log('Message sent: %s', info.messageId);
            });
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