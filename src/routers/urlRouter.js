import { Router } from "express";
import postUrl from "../controllers/urlcontrollers/postUrl.js";
import getUrlById from "../controllers/urlcontrollers/getUrlById.js";
import urlShortenMiddleware from "../middlewares/urlShortenMiddleware.js";

const urlRouter = Router();

urlRouter.post('/urls/shorten', urlShortenMiddleware ,postUrl);
urlRouter.get('/urls/:id', getUrlById);

export default urlRouter;