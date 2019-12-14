import database from '../src/models';

class CommentService {
  static async getAllComments() {
    try {
      return await database.Comment.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getCommentsByTopic(topicId) {
    try {
      return await database.Comment.findAll({
        where: { topicId }
      });
    } catch (error) {
      throw error;
    }
  }

  static async addComment(newComment) {
    console.log(newComment, '====>>><<<>>>')
    try {
      return await database.Comment.create(newComment);
    } catch (error) {
      throw error;
    }
  }

  static async updateComment(id, updateComment) {
    try {
      const CommentToUpdate = await database.Comment.findOne({
        where: { id }
      });

      if (CommentToUpdate) {
        await database.Comment.update(updateComment, { where: { id } });

        return updateComment;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getSingleComment(id) {
    try {
      const theComment = await database.Comment.findOne({
        where: { id }
      });

      return theComment;
    } catch (error) {
      throw error;
    }
  }

  static async deleteComment(id) {
    try {
      const CommentToDelete = await database.Comment.findOne({ where: { id } });

      if (CommentToDelete) {
        const deletedComment = await database.Comment.destroy({
          where: { id }
        });
        return deletedComment;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default CommentService;
