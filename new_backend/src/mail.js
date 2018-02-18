import nodemailer from 'nodemailer';
import env from 'dotenv';

env.config();

async function sendEmail(destination, subject, text){
    let transporter;
    if(process.env.NODE_ENV == 'production'){
        transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASS
            },
            tls: {
                rejectUnauthorized: false
            }
        })
    }else{
        transporter = nodemailer.createTransport({
            service: process.env.SMTP_SERVICE,
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASS
            }
        });
    }

    let mailOptions = {
        from: `"RubyTodo" <${process.env.SMTP_EMAIL}>`,
        to: destination,
        subject: subject,
        text: 'Hello world?',
        html: text
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return false;
        }
        console.log('Message sent: %s', info.messageId);
    });
    return true;
}

export { sendEmail as default };