import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()

export default async function postSignIn(req, res){
    const query = res.locals.query;
    const jwt = jsonwebtoken;
    try{
        const SECRET_KEY = process.env.JWT_SECRET;
        const token = jwt.sign(query, SECRET_KEY, {expiresIn: '15 minutes'});
        return res.status(200).send({token: token});
    } catch(error){
        return res.status(500).send(`${error}.`)
    }
}