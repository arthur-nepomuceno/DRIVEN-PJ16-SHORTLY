import queryInsertEmail from "../../repository/signUpRepository/queryInsertEmail.js";

export default async function postSignUp(req, res){
    const body = res.locals.body;
    try{
        await queryInsertEmail(body);
        return res.sendStatus(201);
    } catch(error){
        return res.status(500).send(`${error}.`)
    }
}