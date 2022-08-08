import queryIsValidEmail from "../../repository/signUpRepository/queryIsValidEmail.js";

export default async function isValidEmail(req, res, next){

    const body = res.locals.body;
    
    try{
        const {rows: queryResult} = await queryIsValidEmail(body);

        const isValidEmail = queryResult[0].length === 0;   
             
        if(isValidEmail === false){
            
            return res.status(409).send('Conflict: email already registered.')
        
        } else {
            
            res.locals.body = body;
            next()
        
        }
    } catch(error){
        
        return res.status(500).send(`${error}.`)
    
    }
}