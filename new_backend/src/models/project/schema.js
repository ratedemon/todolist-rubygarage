import Joi from 'joi';

const schemaCreate = Joi.object().keys({
    name: Joi.string().min(1).max(256).required(),
    email: Joi.string().required().regex(/[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}/, "email"),
    id: Joi.number().integer().required()
});

const schemeUpdate = Joi.object().keys({
    name: Joi.string().min(1).max(256).required(),
    email: Joi.string().required().regex(/[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}/, "email"),
    project_id: Joi.number().integer().required(),
    id: Joi.number().integer().required()
});

const schemeDelete = Joi.object().keys({
    email: Joi.string().required().regex(/[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}/, "email"),
    user_id: Joi.number().integer().required(),
    id: Joi.number().integer().required()
});

const schemeGet = Joi.object().keys({
    email: Joi.string().required().regex(/[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}/, "email"),
    id: Joi.number().integer().required()
});

export {schemaCreate, schemeUpdate, schemeDelete, schemeGet};