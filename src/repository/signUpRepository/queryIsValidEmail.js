import connection from '../../dbStrategy/postgres.js';

export default async function queryIsValidEmail(object){
    const searchQuery = 'SELECT email FROM users WHERE email = $1;';
    const bindParams = [object.email];
    return connection.query(searchQuery, bindParams);
}