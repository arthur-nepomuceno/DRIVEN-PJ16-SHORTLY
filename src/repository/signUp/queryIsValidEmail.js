import connection from '../../dbStrategy/postgres.js';

export default function queryIsValidEmail(body){
    const query = 'SELECT email FROM users WHERE email = $1;';
    const bindParams = [body.email];
    return connection.query(query, bindParams);
}