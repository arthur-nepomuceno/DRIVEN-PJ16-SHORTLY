import connection from '../../dbStrategy/postgres.js';

export default async function getRanking(req, res){
    const getQuery = `SELECT "userId" AS id, 
                              users.name, 
                              COUNT("userId") AS "linksCount", 
                              SUM("visitCount") AS "visitCount" 
                      FROM "shortUrls" 
                      JOIN users 
                      ON users.id = "shortUrls"."userId" 
                      GROUP BY "userId", users.name 
                      ORDER BY "visitCount" DESC 
                      LIMIT 10;`
                               
    try{
        const {rows: queryResult} = await connection.query(getQuery);
        res.send(queryResult);
    } catch(error) {
        res.status(500).send(error);
    }
}