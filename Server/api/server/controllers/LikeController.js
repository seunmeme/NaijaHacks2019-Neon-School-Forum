require('dotenv').config();
import LikeService from '../services/LikeService';
import Util from '../utils/Utils';

const util = new Util();

class LikeController {

    static async addLike(req, res) {

        if ( !req.body.liked ) {
            util.setError(400, 'Please provide liked');
            return util.send(res);
          }
          const newLike = {...req.body, userId: req.user.id, topicId: req.params.topicId };
          try {
            const createdLike = await LikeService.addLike(newLike);
            util.setSuccess(201, 'Like Added!', {createdLike});
            return util.send(res);
          } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
          }
      }

    static async getLikesByTopic(req, res) {
        const { topicId } = req.params;
          try {
            console.log(topicId);
            const allLikes = await LikeService.getLikesByTopic(topicId);
            if (allLikes.length > 0) {
              util.setSuccess(200, 'Likes retrieved', allLikes);
            } else {
              util.setSuccess(200, 'No Like found');
            }
            return util.send(res);
          } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
          }
        }

    static async getAllLike(req, res) {
        try {
          const allLikes = await LikeService.getAllLikes();
          if (allLikes.length > 0) {
            util.setSuccess(200, 'Likes retrieved', allLikes);
          } else {
            util.setSuccess(200, 'No Like found');
          }
          return util.send(res);
        } catch (error) {
          util.setError(400, error.message);
          return util.send(res);
        }
      }

  static async updateLike(req, res) {
    const alteredLike = req.body;
    const { LikeId } = req.params;
    try {
      const updateLike = await LikeService.updateLike(LikeId, alteredLike);
      if (!updateLike) {
        util.setError(404, `Cannot find Like with the id: ${LikeId}`);
      } else {
        util.setSuccess(200, 'Like updated', updateLike);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }


}

export default LikeController;