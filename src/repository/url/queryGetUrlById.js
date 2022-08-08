import connection from "../../dbStrategy/postgres.js";

export default function queryGetUrlById(id){
    const query = 'SELECT id, "userId", "shortUrl", url FROM "shortUrls" WHERE id = $1;';
    const bindParams = [id];
    return connection.query(query, bindParams);
}