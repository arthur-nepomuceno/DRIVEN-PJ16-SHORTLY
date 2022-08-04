import Joi from "joi";

export default function signInSchema(object){
    const validateObject = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp(/[a-zA-Z0-9!@#$%^&*()\-__+.]{11,}/))
    })

    const validation = validateObject.validate(object);
    
    return validation;
}