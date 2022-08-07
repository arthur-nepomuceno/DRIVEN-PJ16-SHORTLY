import { Router } from "express";
import getUserData from "../controllers/userControllers/getUserData.js";
import getRanking from "../controllers/userControllers/getRanking.js";

const userRouter = Router();

userRouter.get('/users/me', getUserData);
userRouter.get('/ranking', getRanking);

export default userRouter