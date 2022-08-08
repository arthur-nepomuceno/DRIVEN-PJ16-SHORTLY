import connection from '../../dbStrategy/postgres.js';

export default function queryGetUsersMe(decode){
    const query = 'SELECT id, "shortUrl", url, "visitCount" FROM "shortUrls" WHERE "userId" = $1;';
    const bindParams = [decode.id];
    return connection.query(query, bindParams);
}