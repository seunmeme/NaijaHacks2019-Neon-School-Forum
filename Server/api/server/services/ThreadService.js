import database from '../src/models';

class ThreadService {
  static async getAllThreads() {
    try {
      return await database.Thread.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addThread(newThread) {
    try {
      return await database.Thread.create(newThread);
    } catch (error) {
      throw error;
    }
  }

  static async getThreadsByDiscussion(discussionId) {
    try {
      return await database.Thread.findAll({
        where: { discussionId }
      });
    } catch (error) {
      throw error;
    }
  }

  static async updateThread(id, updateThread) {
    try {
      const ThreadToUpdate = await database.Thread.findOne({
        where: { id }
      });

      if (ThreadToUpdate) {
        await database.Thread.update(updateThread, { where: { id } });

        return updateThread;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getSingleThread(id) {
    try {
      const theThread = await database.Thread.findOne({
        where: { id }
      });

      return theThread;
    } catch (error) {
      throw error;
    }
  }

  static async deleteThread(id) {
    try {
      const ThreadToDelete = await database.Thread.findOne({ where: { id } });

      if (ThreadToDelete) {
        const deletedThread = await database.Thread.destroy({
          where: { id }
        });
        return deletedThread;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default ThreadService;
