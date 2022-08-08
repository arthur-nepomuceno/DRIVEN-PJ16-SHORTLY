import connection from "../../dbStrategy/postgres.js";

export default async function getShortUrl(req, res){
    const { shortUrl } = req.params;
    
    try{
        //checking if shortUrl is valid
        const getQuery = 'SELECT url, "visitCount" FROM "shortUrls" WHERE "shortUrl" = $1;';
        const bindParams = [shortUrl];
        const {rows: queryResult} = await connection.query(getQuery, bindParams);
        if(queryResult.length === 0){
            res.sendStatus(404);
        } else {
            //incrising visitCount
            const visitCount = queryResult[0].visitCount;
            const newCount = visitCount + 1;
            const updateQuery = `UPDATE "shortUrls" SET "visitCount" = ${newCount} WHERE "shortUrl" = $1;`;
            const bindParams = [shortUrl];
            await connection.query(updateQuery, bindParams);
            
            //redirecting to url
            const url = queryResult[0].url;            
            return res.redirect(url);    

        }
    } catch(error){
        return res.status(500).send(error);
    }
}