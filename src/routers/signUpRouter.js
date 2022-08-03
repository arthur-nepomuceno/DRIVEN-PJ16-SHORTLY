import { Router } from "express";
import signUpController from "../controllers/signUpController.js";
import signUpMiddleware from "../middlewares/signUpMiddleware.js";

const signUpRouter = Router();

signUpRouter.post('/signup', signUpMiddleware ,signUpController);

export default signUpRouter;