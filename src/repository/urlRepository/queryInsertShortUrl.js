import connection from '../../dbStrategy/postgres.js';

export default function queryInsertShortUrl(decode, identifier, body){

    const insertQuery = `INSERT INTO "shortUrls" ("userId", "shortUrl", url) VALUES ($1, $2, $3);`;
    const bindParams = [decode.id, identifier, body.url];
    return connection.query(insertQuery, bindParams);

}