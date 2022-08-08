import { Router } from "express";
import postSignIn from "../controllers/signIn/postSignIn.js";
import isValidDataType from "../middlewares/signIn/isValidDataType.js";
import isValidEmail from "../middlewares/signIn/isValidEmail.js";

const signInRouter = Router();

signInRouter.post('/signin', isValidDataType, isValidEmail ,postSignIn);

export default signInRouter;