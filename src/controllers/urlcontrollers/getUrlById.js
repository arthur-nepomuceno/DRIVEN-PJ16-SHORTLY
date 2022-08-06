export default async function getUrlById(req, res){
    const {id} = req.params;
    res.send(id);
}