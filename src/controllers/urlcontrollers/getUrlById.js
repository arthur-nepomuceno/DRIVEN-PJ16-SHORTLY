import connection from "../../dbStrategy/postgres.js";

export default async function getUrlById(req, res){
    const { id } = req.params;
    const getQuery = 'SELECT id, "shortUrl", url FROM "shortUrls" WHERE id = $1;';
    const bindParams = [id];

    try{
        const {rows: queryResult} = await connection.query(getQuery, bindParams);
        
        if(queryResult.length === 0){
            res.sendStatus(404);
        } else {
            res.status(200).send(...queryResult);
        }
    } catch(error){
        res.status(500).send(error);
    }
}