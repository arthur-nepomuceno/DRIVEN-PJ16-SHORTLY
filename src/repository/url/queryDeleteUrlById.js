import connection from "../../dbStrategy/postgres.js";

export default function queryDeleteUrlById(id){
    const deleteQuery = `DELETE FROM "shortUrls" WHERE id = $1;`;
    const bindParams = [id];
    return connection.query(deleteQuery, bindParams);
}