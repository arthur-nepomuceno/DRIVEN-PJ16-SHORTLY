import signInSchema from '../schemas/signInSchema.js';

export default function isValidDataType(req, res, next){
    const body = req.body;    
    const validation = signInSchema(body);

    if(validation.error){
        const error = validation.error.details[0].context.key;
        if(error === 'email'){
            return res.status(422).send('Invalid email format.');
        } else if(error === 'password'){
            return res.status(422).send('Password must have at least 11 digits between letters, numbers and special characters.');
        }
    } else {
        res.locals.body = body;
        next();
    }
}