require('dotenv').config();
import DiscussionService from '../services/DiscussionService';
import Util from '../utils/Utils';

const util = new Util();

class DiscussionController {

    static async addDiscussion(req, res) {

        if ( !req.body.content ) {
            util.setError(400, 'Please provide content');
            return util.send(res);
          }
          const newDiscussion = {...req.body, userId: req.user.id, topicId: req.params.topicId, };
          try {
            const createdDiscussion = await DiscussionService.addDiscussion(newDiscussion);
            util.setSuccess(201, 'Discussion Added!', {createdDiscussion});
            return util.send(res);
          } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
          }
      }

    static async getDiscussionsByTopic(req, res) {
        const { topicId } = req.params;
          try {
            console.log(topicId);
            const allDiscussions = await DiscussionService.getDiscussionsByTopic(topicId);
            if (allDiscussions.length > 0) {
              util.setSuccess(200, 'Discussions retrieved', allDiscussions);
            } else {
              util.setSuccess(200, 'No Discussion found');
            }
            return util.send(res);
          } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
          }
        }

    static async getAllDiscussion(req, res) {
        try {
          const allDiscussions = await DiscussionService.getAllDiscussions();
          if (allDiscussions.length > 0) {
            util.setSuccess(200, 'Discussions retrieved', allDiscussions);
          } else {
            util.setSuccess(200, 'No Discussion found');
          }
          return util.send(res);
        } catch (error) {
          util.setError(400, error.message);
          return util.send(res);
        }
      }

  static async updateDiscussion(req, res) {
    const alteredDiscussion = req.body;
    const { DiscussionId } = req.params;
    try {
      const updateDiscussion = await DiscussionService.updateDiscussion(DiscussionId, alteredDiscussion);
      if (!updateDiscussion) {
        util.setError(404, `Cannot find Discussion with the id: ${DiscussionId}`);
      } else {
        util.setSuccess(200, 'Discussion updated', updateDiscussion);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }


}

export default DiscussionController;