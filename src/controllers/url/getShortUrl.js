import queryIncreaseVisitCount from "../../repository/url/queryIncreaseVisitCount.js";

export default async function getShortUrl(req, res){
    const shortUrl  = res.locals.shortUrl;
    const queryResult = res.locals.queryResult;
    
    try{
        await queryIncreaseVisitCount(queryResult, shortUrl);            
        return res.redirect(queryResult[0].url);
    } catch(error){
        return res.status(500).send(error);
    }
}