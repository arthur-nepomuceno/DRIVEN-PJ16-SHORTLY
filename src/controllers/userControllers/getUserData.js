import connection from '../../dbStrategy/postgres.js';
import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export default async function getUserData(req, res){
    //verifying headers and token
    const authorization = req.headers.authorization;
    const token = authorization?.replace(/Bearer |'/g, '');
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

    try{
        //verifying if token info matches user's info at the same id registered at database
        const searchQuery = 'SELECT name FROM users WHERE id = $1;';
        const bind_Params = [decode.id];
        const {rows: query_Result} = await connection.query(searchQuery, bind_Params);
        const isValidUser = decode.name === query_Result[0].name && query_Result != 0;
        if(!isValidUser){
            return res.sendStatus(404);
        }

        //main part
        const urlsQuery = 'SELECT id, "shortUrl", url, "visitCount" FROM "shortUrls" WHERE "userId" = $1;';
        const bindParams = [decode.id];
        const {rows: queryResult} = await connection.query(urlsQuery, bindParams);
        let totalVisits = 0;
        queryResult.map(element => {
            totalVisits += element.visitCount;
        })
        
        const userData = {
            id: decode.id,
            name: decode.name,
            visitCount: totalVisits,
            shortenedUrls: queryResult
        }

        return res.status(200).send(userData);
    } catch(error){
        return res.status(500).send(error);
    }
}