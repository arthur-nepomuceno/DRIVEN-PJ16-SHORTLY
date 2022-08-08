import { Router } from "express";
import postSignUp from "../controllers/signUp/postSignUp.js";
import isValidDataType from "../middlewares/signUp/isValidDataType.js";
import isValidEmail from "../middlewares/signUp/isValidEmail.js";

const signUpRouter = Router();

signUpRouter.post('/signup', isValidDataType, isValidEmail ,postSignUp);

export default signUpRouter;