import connection from "../../dbStrategy/postgres.js";

export default async function queryGetRanking(){
    const query = `SELECT  users.id, 
                              users.name, 
                              COUNT("userId") AS "linksCount", 
                              COALESCE(SUM("visitCount"), 0) AS "visitCount" 
                      FROM "shortUrls"
                      RIGHT JOIN users
                      ON users.id = "shortUrls"."userId"
                      GROUP BY users.id, users.name
                      ORDER BY "visitCount" DESC
                      LIMIT 10;`

    return connection.query(query);
}