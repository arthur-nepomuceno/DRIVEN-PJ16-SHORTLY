import connection from '../../dbStrategy/postgres.js';

export default function queryIsValidEmail(object){
    const searchQuery = 'SELECT * FROM users WHERE email = $1;';
    const bindParams = [object.email];
    return connection.query(searchQuery, bindParams);
}