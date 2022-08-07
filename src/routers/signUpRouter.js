import { Router } from "express";
import postSignUp from "../controllers/signUpControllers/postSignUp.js";
import isValidDataType from "../middlewares/signUpMiddlewares/isValidDataType.js";
import isValidEmail from "../middlewares/signUpMiddlewares/isValidEmail.js";

const signUpRouter = Router();

signUpRouter.post('/signup', isValidDataType, isValidEmail ,postSignUp);

export default signUpRouter;