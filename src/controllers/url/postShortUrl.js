import { nanoid } from 'nanoid';
import queryInsertShortUrl from '../../repository/url/queryInsertShortUrl.js';

export default async function postShortUrl(req, res){

    const body = res.locals.body;
    const decode = res.locals.decode;

    const identifier = nanoid(9);

    const shortUrl = {shortUrl: identifier};

    try{

        await queryInsertShortUrl(decode, identifier, body);

        return res.status(201).send(shortUrl);

    } catch(error){

        return res.status(500).send(error);
    
    }
}