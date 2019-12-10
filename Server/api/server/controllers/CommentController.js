require('dotenv').config();
import CommentService from '../services/CommentService';
import Util from '../utils/Utils';

const util = new Util();

class CommentController {

    static async addComment(req, res) {

        if ( !req.body.content ) {
            util.setError(400, 'Please provide content');
            return util.send(res);
          }
          const newComment = {...req.body, topicId: req.params.topicId, };
          try {
            const createdComment = await CommentService.addComment(newComment);
            const user = req.user
            util.setSuccess(201, 'Comment Added!', {createdComment, user});
            return util.send(res);
          } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
          }
      }

    static async getAllComment(req, res) {
        try {
          const allComments = await CommentService.getAllComments();
          if (allComments.length > 0) {
            util.setSuccess(200, 'Comments retrieved', allComments);
          } else {
            util.setSuccess(200, 'No Comment found');
          }
          return util.send(res);
        } catch (error) {
          util.setError(400, error.message);
          return util.send(res);
        }
      }

  static async updateComment(req, res) {
    const alteredComment = req.body;
    const { CommentId } = req.params;
    try {
      const updateComment = await CommentService.updateComment(CommentId, alteredComment);
      if (!updateComment) {
        util.setError(404, `Cannot find Comment with the id: ${CommentId}`);
      } else {
        util.setSuccess(200, 'Comment updated', updateComment);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }


}

export default CommentController;