import queryIsValidEmail from "../../repository/signUpRepository/queryIsValidEmail.js";


export default async function isValidEmail(req, res, next){
    const body = res.locals.body;
    try{
        const queryResult = await queryIsValidEmail(body);
        const queryData = queryResult.rows;
        const isValidEmail = queryData.length === 0;        
        if(!isValidEmail){
            return res.status(409).send('Conflict: email already registered.')
        } else {
            res.locals.body = body;
            next()
        }
    } catch(error){
        return res.status(500).send(`${error}.`)
    }
}