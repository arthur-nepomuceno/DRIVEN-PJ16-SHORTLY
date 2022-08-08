import { Router } from "express";
import postSignIn from "../controllers/signInControllers/postSignIn.js";
import isValidDataType from "../middlewares/signInMiddlewares/isValidDataType.js";
import isValidEmail from "../middlewares/signInMiddlewares/isValidEmail.js";

const signInRouter = Router();

signInRouter.post('/signin', isValidDataType, isValidEmail ,postSignIn);

export default signInRouter;