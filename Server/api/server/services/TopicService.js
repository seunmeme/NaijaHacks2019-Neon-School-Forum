import database from '../src/models';

class TopicService {
  static async getAllTopics() {
    try {
      return await database.Topic.findAll({
        order: [['createdAt', 'DESC']]
      });
    } catch (error) {
      throw error;
    }
  }

  static async getTopicsByCategory(category) {
    try {
      return await database.Topic.findAll({
        where: { category },
        attributes: ['id', 'title', 'content', 'userId'],
        include: [
          {
            model: database.User,
            attributes: ['imageUrl', 'school', 'fullname']
          }]
      });
    } catch (error) {
      throw error;
    }
  }

  static async getPaginatedTopics(page, pageSize) {
    const realPage = page - 1;
    const offset = (realPage) * pageSize;
    const limit = pageSize;
    try {
      return await database.Topic.findAll({
        limit,
        offset,
        order: [['createdAt', 'DESC']]
      });
    } catch (error) {
      throw error;
    }
  }

  static async addTopic(newTopic) {
    try {
      return await database.Topic.create(newTopic);
    } catch (error) {
      throw error;
    }
  }

  static async updateTopic(id, updateTopic) {
    try {
      const topicToUpdate = await database.Topic.findOne({
        where: { id }
      });

      if (topicToUpdate) {
        await database.Topic.update(updateTopic, { where: { id } });

        return updateTopic;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getSingleTopic(id) {
    try {
      const theTopic = await database.Topic.findOne({
        where: { id },
        attributes: ['id', 'title', 'content', 'userId'],
        include: [{
          model: database.User,
          attributes: ['username', 'school']
        }]
      });

      return theTopic;
    } catch (error) {
      throw error;
    }
  }

  static async deleteTopic(id) {
    try {
      const topicToDelete = await database.Topic.findOne({ where: { id } });

      if (topicToDelete) {
        const deletedTopic = await database.Topic.destroy({
          where: { id }
        });
        return deletedTopic;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default TopicService;
