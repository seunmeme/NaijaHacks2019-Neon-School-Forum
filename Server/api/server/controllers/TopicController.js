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
            util.setSuccess(201, 'Topic Added!', createdTopic);
            return util.send(res);
          } catch (error) {
            util.setError(400, error.message);
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