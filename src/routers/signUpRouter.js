import { Router } from "express";
import postSignUp from "../controllers/signUpControllers/postSignUp.js";
import signUpMiddleware from "../middlewares/signUpMiddleware.js";

const signUpRouter = Router();

signUpRouter.post('/signup', signUpMiddleware ,postSignUp);

export default signUpRouter;