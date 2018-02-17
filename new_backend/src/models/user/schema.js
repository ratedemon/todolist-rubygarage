import Joi from 'joi';

const schemaRegister = Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().regex(/[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}/, "email"),
    password: Joi.string().min(6).max(24).required()
});

const schemaLogin = Joi.object().keys({
    email: Joi.string().regex(/[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}/, "email"),
    password: Joi.string().min(6).max(24).required()
});

export {schemaRegister, schemaLogin};