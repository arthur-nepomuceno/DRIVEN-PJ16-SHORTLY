export default function isUrlFromUser(req, res, next){
    const queryResult = res.locals.queryResult
    const decode = res.locals.decode;

    const isUserShortUrl = decode.id === queryResult[0].userId;
    if(isUserShortUrl === false){
        return res.sendStatus(401);
    } else {
        next();
    }
}