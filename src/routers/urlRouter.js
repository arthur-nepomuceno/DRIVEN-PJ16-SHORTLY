import { Router } from "express";
import postShortUrl from "../controllers/urlControllers/postShortUrl.js";
import getUrlById from "../controllers/urlControllers/getUrlById.js";
import getShortUrl from "../controllers/urlControllers/getShortUrl.js";
import deleteUrlById from "../controllers/urlControllers/deleteUrlById.js";
import isValidUrl from "../middlewares/urlMiddlewares/isValidUrl.js";
import isValidToken from "../middlewares/urlMiddlewares/isValidToken.js";

const urlRouter = Router();

urlRouter.post('/urls/shorten', isValidUrl, isValidToken, postShortUrl);
urlRouter.get('/urls/:id', getUrlById);
urlRouter.get('/urls/open/:shortUrl', getShortUrl)
urlRouter.delete('/urls/:id', deleteUrlById);

export default urlRouter;