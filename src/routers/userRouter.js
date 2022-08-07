import { Router } from "express";
import getUserData from "../controllers/userControllers/getUserData.js";

const userRouter = Router();

userRouter.get('/users/me', getUserData);

export default userRouter