import connection from "../../dbStrategy/postgres.js";

export default function queryIncreaseVisitCount(queryResult, shortUrl){
    const visitCount = queryResult[0].visitCount;
    const newCount = visitCount + 1;
    const query = `UPDATE "shortUrls" SET "visitCount" = ${newCount} WHERE "shortUrl" = $1;`;
    const bindParams = [shortUrl];
    return connection.query(query, bindParams);
}