import queryGetShortUrl from "../../repository/url/queryGetShortUrl.js";

export default async function isValidShortUrl(req, res, next){
    const { shortUrl } = req.params;

    try{

        const {rows: queryResult} = await queryGetShortUrl(shortUrl);

        if(queryResult.length === 0){
            return res.sendStatus(404);
        } else {
            res.locals.shortUrl = shortUrl;
            res.locals.queryResult = queryResult;
            next()
        }

    } catch(error){
        return res.status(500).send(error);
    }
}