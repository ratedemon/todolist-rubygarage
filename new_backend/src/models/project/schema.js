import Joi from 'joi';

const schemeDefault = {
    email: Joi.string().required().regex(/[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}/, "email"),
    id: Joi.number().integer().required()
};

const schemaCreate = Joi.object().keys(
    Object.assign({}, schemeDefault,{name: Joi.string().min(1).max(256).required()})
);

const schemeUpdate = Joi.object().keys(
    Object.assign({}, schemeDefault, {name: Joi.string().min(1).max(256).required(),project_id: Joi.number().integer().required()})
);

const schemeDelete = Joi.object().keys(
    Object.assign({}, schemeDefault, {user_id: Joi.number().integer().required()})
);

const schemeGet = Joi.object().keys(
    schemeDefault
);

export {schemaCreate, schemeUpdate, schemeDelete, schemeGet};