import { Router } from "express";
import postUrl from "../controllers/urlcontrollers/postUrl.js";
import getUrlById from "../controllers/urlcontrollers/getUrlById.js";
import getShortUrl from "../controllers/urlcontrollers/getShortUrl.js";
import urlShortenMiddleware from "../middlewares/urlShortenMiddleware.js";

const urlRouter = Router();

urlRouter.post('/urls/shorten', urlShortenMiddleware ,postUrl);
urlRouter.get('/urls/:id', getUrlById);
urlRouter.get('/urls/open/:shortUrl', getShortUrl)

export default urlRouter;