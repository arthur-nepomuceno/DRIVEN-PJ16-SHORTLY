import queryGetUsersMe from '../../repository/user/queryGetUsersMe.js';
import dotenv from 'dotenv';
dotenv.config();

export default async function getUserMe(req, res){
    const decode = res.locals.decode;

    try{

        const {rows: queryResult} = await queryGetUsersMe(decode);
        
        let totalVisits = 0;
        queryResult.map(element => {
            totalVisits += element.visitCount;
        })
        
        const userData = {
            id: decode.id,
            name: decode.name,
            visitCount: totalVisits,
            shortenedUrls: queryResult
        }

        return res.status(200).send(userData);

    } catch(error){

        return res.status(500).send(error);
    
    }
}