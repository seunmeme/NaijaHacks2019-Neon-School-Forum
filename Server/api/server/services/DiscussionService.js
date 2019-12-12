import database from '../src/models';

class DiscussionService {
  static async getAllDiscussions() {
    try {
      return await database.Discussion.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getDiscussionsByTopic(topicId) {
    try {
      return await database.Discussion.findAll({
        where: { topicId }
      });
    } catch (error) {
      throw error;
    }
  }

  static async addDiscussion(newDiscussion) {
    try {
      return await database.Discussion.create(newDiscussion);
    } catch (error) {
      throw error;
    }
  }

  static async updateDiscussion(id, updateDiscussion) {
    try {
      const DiscussionToUpdate = await database.Discussion.findOne({
        where: { id }
      });

      if (DiscussionToUpdate) {
        await database.Discussion.update(updateDiscussion, { where: { id } });

        return updateDiscussion;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getSingleDiscussion(id) {
    try {
      const theDiscussion = await database.Discussion.findOne({
        where: { id }
      });

      return theDiscussion;
    } catch (error) {
      throw error;
    }
  }

  static async deleteDiscussion(id) {
    try {
      const DiscussionToDelete = await database.Discussion.findOne({ where: { id } });

      if (DiscussionToDelete) {
        const deletedDiscussion = await database.Discussion.destroy({
          where: { id }
        });
        return deletedDiscussion;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default DiscussionService;
