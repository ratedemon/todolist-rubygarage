import Joi from 'joi';

const schemeDefault = {
    id: Joi.number().integer().required(),
    project_id: Joi.number().integer().required(),
    email: Joi.string().required().regex(/[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}/, "email")
};

const schemaCreate = Joi.object().keys(
    Object.assign({}, schemeDefault, {name: Joi.string().required().min(1), position: Joi.number().integer().required()})
);

const schemeUpdate = Joi.object().keys(
    Object.assign({}, schemeDefault, {name: Joi.string().required().min(1), task_id: Joi.number().integer().required()})
);

const schemeDelete = Joi.object().keys(
    Object.assign({}, schemeDefault, {task_id: Joi.number().integer().required()})
);

const schemeChangeStatus = Joi.object().keys(
    Object.assign({}, schemeDefault, {task_id: Joi.number().integer().required(), status: Joi.boolean().required()})
);

const schemeChangePosition = Joi.object().keys(
    Object.assign({}, schemeDefault, {tasks: Joi.array().items(Joi.object().keys({
        id: Joi.number().integer().required(),
        position: Joi.number().integer().required()
    }))})
);

export {schemaCreate, schemeUpdate, schemeDelete, schemeChangeStatus, schemeChangePosition};