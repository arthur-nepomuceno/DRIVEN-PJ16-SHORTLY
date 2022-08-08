import connection from '../../dbStrategy/postgres.js';

export default function queryIsValidUser(decode){
    
    const query = 'SELECT name FROM users WHERE id = $1;';
    const bindParams = [decode.id];

    return connection.query(query, bindParams);
}