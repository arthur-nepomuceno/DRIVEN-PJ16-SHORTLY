import connection from "../../dbStrategy/postgres.js";

export default function queryGetShortUrl(shortUrl){
    const query = 'SELECT url, "visitCount" FROM "shortUrls" WHERE "shortUrl" = $1;';
    const bindParams = [shortUrl];
    return connection.query(query, bindParams);
}