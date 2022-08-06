import { Router } from "express";
import postSignIn from "../controllers/signInControllers/postSignIn.js";
import signInMiddleware from "../middlewares/signInMiddleware.js";

const signInRouter = Router();

signInRouter.post('/signin', signInMiddleware ,postSignIn);

export default signInRouter;