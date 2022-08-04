import Joi from "joi";

export default function signUpSchema(object){
    const schema = Joi.object({
        name: Joi.string().trim().required(),
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp(/[a-zA-Z0-9!@#$%^&*()\-__+.]{11,}/)),
        confirmPassword: Joi.string().pattern(new RegExp(/[a-zA-Z0-9!@#$%^&*()\-__+.]{11,}/))
    })

    const validation = schema.validate(object);
    
    return validation;
}