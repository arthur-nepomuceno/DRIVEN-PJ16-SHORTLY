import signUpSchema from '../schemas/signUpSchema.js'

export default function isValidDataType(req, res, next){
    const body = req.body;
    const validPassword = body.password === body.confirmPassword;

    const validation = signUpSchema(body);

    if(validation.error){
        const error = validation.error.details[0].context.key;

        if(error === 'name'){
            return res.status(422).send('Name must be a non empty text.');
        } else if(error === 'email'){
            return res.status(422).send('Invalid email format.');
        } else if(error === 'password'){
            return res.status(422).send('Password must have at least 11 digits between letters, numbers and special characters.');
        } else if(error === 'confirmPassword' || !validPassword){
            return res.status(422).send('Please, confirm password correctly.')
        }
    } else {
        res.locals.body = body;
        next();
    }
}