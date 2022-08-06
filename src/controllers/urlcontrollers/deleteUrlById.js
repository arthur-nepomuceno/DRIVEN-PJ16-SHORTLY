import jsonwebtoken from 'jsonwebtoken';
import connection from '../../dbStrategy/postgres.js';
import dotenv from 'dotenv';
dotenv.config();

export default async function deleteUrlById(req, res){
    const { id } = req.params;
    
    //verifying headers and token
    const authorization = req.headers.authorization;
    const token = authorization.replace(/Bearer |'/g, '');
    const jwt = jsonwebtoken;
    const SECRET_KEY = process.env.JWT_SECRET;
    
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


    //checking if shortUrl exists
    const getQuery = 'SELECT id, "userId" FROM "shortUrls" WHERE id = $1;';
    const bindParams = [id];
    try{
        const {rows: queryResult} = await connection.query(getQuery, bindParams);
        
        if(queryResult.length === 0){
            return res.sendStatus(404);
        }

        //checking if shortUrl's id belongs to user token's id
        const isUserShortUrl = decode.id === queryResult[0].userId;
        if(!isUserShortUrl){
            return res.sendStatus(401);
        } else {
            //deleting
            const deleteQuery = `DELETE FROM "shortUrls" WHERE id = $1;`;
            const bindParams = [id];
            await connection.query(deleteQuery, bindParams);

            return res.sendStatus(204);
        }
    } catch(error){
        return res.status(500).send(error);
    }
}