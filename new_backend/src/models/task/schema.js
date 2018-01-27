import Joi from 'joi';

export const schema = Joi.object().keys({
    name: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email(),
    password: Joi.string().min(6).max(24).required()
});