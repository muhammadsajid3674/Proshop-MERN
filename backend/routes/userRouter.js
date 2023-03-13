import express from 'express'
import { authUser, getUserProfile, registerUser } from '../Controller/userController.js';
import protectedRoute from '../middleware/authMiddleware.js';

const userRouter = express.Router();

userRouter.post('/', registerUser);
userRouter.post('/login', authUser);
userRouter.route('/profile').get(protectedRoute, getUserProfile);

export default userRouter;