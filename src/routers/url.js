import { Router } from "express";
import postShortUrl from "../controllers/url/postShortUrl.js";
import getUrlById from "../controllers/url/getUrlById.js";
import getShortUrl from "../controllers/url/getShortUrl.js";
import deleteUrlById from "../controllers/url/deleteUrlById.js";
import isValidUrl from "../middlewares/url/isValidUrl.js";
import isValidUrlId from "../middlewares/url/isValidUrlId.js";
import isValidToken from "../middlewares/token/isValidToken.js";
import isValidShortUrl from "../middlewares/url/isValidShortUrl.js";
import isUrlFromUser from "../middlewares/url/isUrlFromUser.js";

const urlRouter = Router();

urlRouter.post('/urls/shorten', isValidUrl, isValidToken, postShortUrl);

urlRouter.get('/urls/:id', isValidUrlId ,getUrlById);

urlRouter.get('/urls/open/:shortUrl', isValidShortUrl ,getShortUrl)

urlRouter.delete('/urls/:id', isValidUrlId ,isValidToken, isUrlFromUser ,deleteUrlById);

export default urlRouter;