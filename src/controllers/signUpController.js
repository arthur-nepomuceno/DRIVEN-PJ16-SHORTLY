import connection from '../dbStrategy/postgres.js';
import passwordEncrypter from '../utilities/passwordEncrypter.js';

export default async function signUpController(req, res){
    const body = req.body;

    try{
        const searchQuery = 'SELECT email FROM users WHERE email = $1;';
        const bindParams = [body.email];
        const queryResult = await connection.query(searchQuery, bindParams);
        const queryData = queryResult.rows;
        const isValidEmail = queryData.length === 0;
        
        if(!isValidEmail){
            return res.status(409).send('Conflict: email already registered.')
        } else {
            const newPassword = passwordEncrypter(body.password);
            const insertQuery = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3);';
            const bindParams = [body.name, body.email, newPassword];
            await connection.query(insertQuery, bindParams);
            return res.sendStatus(201);
        }
    } catch(error){
        return res.status(500).send(`${error}.`)
    }
}