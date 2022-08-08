import connection from '../../dbStrategy/postgres.js';
import passwordEncrypter from '../../utilities/passwordEncrypter.js';

export default function queryInsertEmail(body){
    const newPassword = passwordEncrypter(body.password);
    const query = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3);';
    const bindParams = [body.name, body.email, newPassword];
    return connection.query(query, bindParams);
}