import connection from '../../dbStrategy/postgres.js';
import passwordEncrypter from '../../utilities/passwordEncrypter.js';

export default function queryInsertEmail(object){
    const newPassword = passwordEncrypter(object.password);
    const insertQuery = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3);';
    const bindParams = [object.name, object.email, newPassword];
    return connection.query(insertQuery, bindParams);
}