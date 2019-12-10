require('dotenv').config();
import TopicService from '../services/TopicService';
import Util from '../utils/Utils';

const util = new Util();

class TopicController {

    static async createTopic(req, res) {

        if ( !req.body.title || !req.body.content) {
            util.setError(400, 'Please provide complete details');
            return util.send(res);
          }
          const newTopic = {...req.body, userId: req.params.userId};
          try {
            const createdTopic = await TopicService.addTopic(newTopic);
            const user = req.user
            util.setSuccess(201, 'Topic Added!', {createdTopic, user});
            return util.send(res);
          } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
          }
      }

    static async getAllTopics(req, res) {
        try {
          const allTopics = await TopicService.getAllTopics();
          if (allTopics.length > 0) {
            util.setSuccess(200, 'Topics retrieved', allTopics);
          } else {
            util.setSuccess(200, 'No Topic found');
          }
          return util.send(res);
        } catch (error) {
          util.setError(400, error.message);
          return util.send(res);
        }
      }

    static async getPaginatedTopics(req, res) {
      const { page } = req.params;
      const { pageSize } = req.params;
        try {
          const pageTopics = await TopicService.getPaginatedTopics(page, pageSize);
          if (pageTopics.length > 0) {
            util.setSuccess(200, 'Topics retrieved', pageTopics);
          } else {
            util.setSuccess(200, 'No Topic found');
          }
          return util.send(res);
        } catch (error) {
          util.setError(400, error.message);
          return util.send(res);
        }
      }

    static async getSingleTopic(req, res) {
        const { topicId } = req.params;
    
        if (!Number(topicId)) {
          util.setError(400, 'Please input a valid numeric value');
          return util.send(res);
        }
    
        try {
          const theTopic = await TopicService.getSingleTopic( topicId );
    
          if (!theTopic) {
            util.setError(404, `Cannot find topic with the id ${topicId}`);
          } else {
            util.setSuccess(200, 'Found Topic', theTopic);
          }
          return util.send(res);
        } catch (error) {
          util.setError(404, error.message);
          return util.send(res);
        }
      }

  static async updateTopic(req, res) {
    const alteredTopic = req.body;
    const { topicId } = req.params;
    try {
      const updateTopic = await TopicService.updateTopic(topicId, alteredTopic);
      if (!updateTopic) {
        util.setError(404, `Cannot find topic with the id: ${topicId}`);
      } else {
        util.setSuccess(200, 'Topic updated', updateTopic);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }


}

export default TopicController;