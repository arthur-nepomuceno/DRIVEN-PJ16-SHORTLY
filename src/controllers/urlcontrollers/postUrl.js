import jsonwebtoken from 'jsonwebtoken';
import { nanoid } from 'nanoid';
import connection from '../../dbStrategy/postgres.js';
import dotenv from 'dotenv';
dotenv.config();

export default async function postUrl(req, res){
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

    //decoding token
    const decode = jwt.verify(token, SECRET_KEY);

    //generating identifier
    const identifier = nanoid(9);
    const shortUrl = {shortUrl: identifier};

    // saving at data base
    try{
        const insertQuery = `INSERT INTO "shortUrls" ("userId", "shortUrl", url) VALUES ($1, $2, $3);`;
        const bindParams = [decode.id, identifier, body.url];
        await connection.query(insertQuery, bindParams);
        return res.status(201).send(shortUrl);

    } catch(error){
        return res.status(500).send(error);
    }

}