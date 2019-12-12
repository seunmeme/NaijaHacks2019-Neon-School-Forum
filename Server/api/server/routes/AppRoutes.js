import { Router } from 'express';
import { auth } from '../middleware/verifyToken';
import UserController from '../controllers/UserController';
import TopicController from '../controllers/TopicController';
import CommentController from '../controllers/CommentController';
import LikeController from '../controllers/LikeController';
import DiscussionController from '../controllers/DiscussionController';
import ThreadController from '../controllers/ThreadController';

const router = Router();

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/users/:userId', UserController.getSingleUser);
router.post('/users/:userId/topics', auth, TopicController.createTopic);
router.get('/topics', TopicController.getAllTopics);
router.get('/topics/:topicId', TopicController.getSingleTopic);
router.get('/topics/categories/:category', TopicController.getTopicsByCategory);
router.get('/topics/:page/:pageSize', TopicController.getPaginatedTopics);
router.post('/users/:userId/topics/:topicId/comments', auth, CommentController.addComment);
router.get('/comments/:topicId', CommentController.getCommentsByTopic);
router.post('/users/:userId/topics/:topicId/likes', auth, LikeController.addLike);
router.get('/likes/:topicId', LikeController.getLikesByTopic);
router.post('/users/:userId/topics/:topicId/discussions', auth, DiscussionController.addDiscussion);
router.get('/discussions/:topicId', DiscussionController.getDiscussionsByTopic);
router.post('/users/:userId/topics/:topicId/discussions/:discussionId/threads', auth, ThreadController.addThread);
router.get('/threads/:discussionId', ThreadController.getThreadsByDiscussion);


export default router;