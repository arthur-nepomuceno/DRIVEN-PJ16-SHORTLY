import { Router } from 'express';
import signUpRouter from './signUp.js';
import signInRouter from './signIn.js';
import urlRouter from './url.js';
import userRouter from './user.js';

const router = Router();

router.use(signUpRouter);
router.use(signInRouter);
router.use(urlRouter);
router.use(userRouter);

export default router;