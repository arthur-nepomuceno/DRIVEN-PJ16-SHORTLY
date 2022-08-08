import queryGetUrlById from "../../repository/url/queryGetUrlById.js";

export default async function isValidUrlId(req, res, next){
    const { id } = req.params;

    try{

        const {rows: queryResult} = await queryGetUrlById(id);

        if(queryResult.length === 0){
         
            return res.sendStatus(404);
        
        } else {
         
            res.locals.id = id;
            res.locals.queryResult = queryResult;
            next();
        
        }

    } catch(error) {

        return res.status(500).send(error);
    
    }
}