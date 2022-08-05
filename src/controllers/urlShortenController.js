import jsonwebtoken from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

export default async function urlShortenController(req, res){
    const body = req.body;
    const authorization = req.headers.authorization;
    const token = authorization.replace(/Bearer |'/g, '');
    const jwt = jsonwebtoken;
    const SECRET_KEY = process.env.JWT_SECRET;
    
    //verifying headers and token
    if(!authorization){
        return res.sendStatus(401);
    } else {
        jwt.verify(token, SECRET_KEY, (error) => {
            if(error){
                return res.status(401).send(error);
            }
        });
    }

    return res.send(body);

}