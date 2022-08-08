export default async function getUrlById(req, res){
    const queryResult = res.locals.queryResult;
    try{
        delete queryResult[0].userId;
        return res.status(200).send(...queryResult);
    } catch(error){
        return res.status(500).send(error);
    }
}