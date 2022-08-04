import { Router } from "express";
import urlShortenController from "../controllers/urlShortenController.js";
import urlShortenMiddleware from "../middlewares/urlShortenMiddleware.js";

const urlRouter = Router();

urlRouter.post('/urls/shorten', urlShortenMiddleware ,urlShortenController);

export default urlRouter;