import Joi from "joi";

export default function signInSchema(object){
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp(/[a-zA-Z0-9!@#$%^&*()\-__+.]{11,}/))
    })

    const validation = schema.validate(object);
    
    return validation;
}