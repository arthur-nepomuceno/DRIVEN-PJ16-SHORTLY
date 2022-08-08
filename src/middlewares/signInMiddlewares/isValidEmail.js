import queryIsValidEmail from '../../repository/signInRepository/queryIsValidEmail.js';
import passwordDecrypter from '../../utilities/passwordDecrypter.js';

export default async function isValidEmail(req, res, next){
    
    const body = res.locals.body;

    try{
        const {rows: queryResult} = await queryIsValidEmail(body);

        const isValidEmail = queryResult[0].length !== 0;
        
        if(isValidEmail === false){

            return res.sendStatus(401);
        
        } else {

            const isValidPassword = passwordDecrypter(body.password, queryResult[0].password);            
            
            if(!isValidPassword){
                return res.sendStatus(401);
            }

        }

        delete queryResult[0].password;
        res.locals.query = queryResult[0];
        next();

    } catch(error){

        return res.status(500).send(`${error}.`)
    
    }
}