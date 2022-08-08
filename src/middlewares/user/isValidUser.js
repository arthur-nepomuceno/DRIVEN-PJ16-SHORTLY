import queryIsValidUser from "../../repository/user/queryIsValidUser.js";

export default async function isValidUser(req, res, next){
    const decode = res.locals.decode;

    try{
        const {rows: queryResult} = await queryIsValidUser(decode);

        const isValidUser = decode.name === queryResult[0].name && queryResult != 0;
        
        if(isValidUser === false){
            
            return res.sendStatus(404);
        
        } else {

            next()

        }

    } catch(error){
        
        return res.status(500).send(error);
    
    }
}