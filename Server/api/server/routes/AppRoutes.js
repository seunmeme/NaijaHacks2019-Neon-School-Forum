import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/user/question', UserController.createQuestion);


export default router;