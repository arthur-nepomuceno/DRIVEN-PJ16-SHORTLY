import queryGetRanking from '../../repository/user/queryGetRanking.js';

export default async function getRanking(req, res){                               
    try{
        const {rows: queryResult} = await queryGetRanking();
        res.send(queryResult);
    } catch(error) {
        res.status(500).send(error);
    }
}