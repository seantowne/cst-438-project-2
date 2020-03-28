// validation using joi
const Joi = require('@hapi/joi');

// Validation for registration
const restrationValidation = (data) => {
    const schema = Joi.object({
        fullname: Joi.string().min(6).required(),
        username: Joi.string().min(6).required(),
        //email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data)
}

const loginValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string().min(6).required(),
        //email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data)
}

module.exports.registrationValidation = restrationValidation;
module.exports.loginValidation = loginValidation;