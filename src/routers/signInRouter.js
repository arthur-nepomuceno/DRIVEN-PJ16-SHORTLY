import { Router } from "express";
import signInController from "../controllers/signInController.js";
import signInMiddleware from "../middlewares/signInMiddleware.js";

const signInRouter = Router();

signInRouter.post('/signin', signInMiddleware ,signInController);

export default signInRouter;