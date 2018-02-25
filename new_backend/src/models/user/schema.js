import Joi from 'joi';

const defaultSchema = {
    email: Joi.string().required().regex(/[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}/, "email"),
    password: Joi.string().min(6).max(24).required()
};

const schemaRegister = Joi.object().keys(
    Object.assign({}, defaultSchema, {name: Joi.string().min(2).max(30).required()})
);

const schemaLogin = Joi.object().keys(defaultSchema);

const schemaSecretCode = Joi.object().keys({
    email: Joi.string().required().regex(/[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}/, "email")
});

const schemaForgot = Joi.object().keys(
    Object.assign({}, defaultSchema, {secret: Joi.string().required()})
);

export {schemaRegister, schemaLogin, schemaSecretCode, schemaForgot};