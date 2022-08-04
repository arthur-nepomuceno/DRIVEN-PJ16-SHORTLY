import Joi from "joi";

export default function urlShortenSchema(object){
    const schema = Joi.object({
        url: Joi.string().uri().required(),
    })

    const validation = schema.validate(object);

    return validation;
}