import { Router } from 'express';
import { auth } from '../middleware/verifyToken';
import UserController from '../controllers/UserController';
import TopicController from '../controllers/TopicController';
import CommentController from '../controllers/CommentController';

const router = Router();

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/users/:userId/topics', auth, TopicController.createTopic);
router.get('/topics', TopicController.getAllTopics);
router.post('/users/:userId/topics/:topicId/comments', auth, CommentController.addComment);


export default router;