import connection from '../dbStrategy/postgres.js';
import passwordDecrypter from '../utilities/passwordDecrypter.js';
import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()

export default async function signInController(req, res){
    const body = req.body;
    const jwt = jsonwebtoken;

    try{
        //validaton steps
        const searchQuery = 'SELECT * FROM users WHERE email = $1;';
        const bindParams = [body.email];
        const queryResult = await connection.query(searchQuery, bindParams);
        const queryData = queryResult.rows[0];
        const isValidEmail = queryData.length !== 0;

        if(!isValidEmail){
            return res.sendStatus(401);
        } else {
            const correctPassword = queryData.password;
            const isValidPassword = passwordDecrypter(body.password, correctPassword);            
            if(!isValidPassword){
                return res.sendStatus(401);
            }            
        }
        
        //controller steps. 
        //add info on database before sending token
        delete queryData.password;
        const SECRET_KEY = process.env.JWT_SECRET;
        const token = jwt.sign(queryData, SECRET_KEY);
        return res.status(200).send({token: token});

    } catch(error){
        return res.status(500).send(`${error}.`)
    }
}