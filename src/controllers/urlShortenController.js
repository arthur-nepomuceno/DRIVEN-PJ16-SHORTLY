export default async function urlShortenController(req, res){
    const body = req.body;
    const authorization = req.headers.authorization;
    const token = authorization.replace(/Bearer |'/g, '');

    if(!authorization){
        return res.sendStatus(401);
    } else{
        return res.send(token);
    }
}