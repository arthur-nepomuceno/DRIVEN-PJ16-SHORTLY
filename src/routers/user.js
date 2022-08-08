import { Router } from "express";
import getUsersMe from "../controllers/user/getUsersMe.js";
import getRanking from "../controllers/user/getRanking.js";
import isValidToken from "../middlewares/token/isValidToken.js";
import isValidUser from "../middlewares/user/isValidUser.js";

const userRouter = Router();

userRouter.get('/users/me', isValidToken, isValidUser ,getUsersMe);
userRouter.get('/ranking', getRanking);

export default userRouter