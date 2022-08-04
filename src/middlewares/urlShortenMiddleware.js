import urlShortenSchema from "./schemas/urlShortenSchema.js";

export default function urlShortenMiddleware(req, res, next){
    const body = req.body;
    const validation = urlShortenSchema(body);
    
    if(validation.error){
        const error = validation.error.details[0].context.key;

        if(error === 'url'){
            return res.status(422).send('Invalid url format.');
        }
    } else {
        next();
    }
}