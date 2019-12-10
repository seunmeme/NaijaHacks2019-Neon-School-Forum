import { Router } from 'express';
import { auth } from '../middleware/verifyToken';
import UserController from '../controllers/UserController';
import TopicController from '../controllers/TopicController';

const router = Router();

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/users/:userId/topic', auth, TopicController.createTopic);


export default router;