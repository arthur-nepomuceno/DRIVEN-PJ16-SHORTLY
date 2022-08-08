import queryDeleteUrlById from "../../repository/url/queryDeleteUrlById.js";

export default async function deleteUrlById(req, res){
    const id = res.locals.id;
    try{        
        await queryDeleteUrlById(id);
        return res.sendStatus(204);
    } catch(error){
        return res.status(500).send(error);
    }
}