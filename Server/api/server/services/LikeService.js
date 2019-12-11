import database from '../src/models';

class LikeService {
  static async getAllLikes() {
    try {
      return await database.Like.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addLike(newLike) {
    try {
      return await database.Like.create(newLike);
    } catch (error) {
      throw error;
    }
  }

  static async updateLike(id, updateLike) {
    try {
      const LikeToUpdate = await database.Like.findOne({
        where: { id }
      });

      if (LikeToUpdate) {
        await database.Like.update(updateLike, { where: { id } });

        return updateLike;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getSingleLike(id) {
    try {
      const theLike = await database.Like.findOne({
        where: { id }
      });

      return theLike;
    } catch (error) {
      throw error;
    }
  }

  static async deleteLike(id) {
    try {
      const LikeToDelete = await database.Like.findOne({ where: { id } });

      if (LikeToDelete) {
        const deletedLike = await database.Like.destroy({
          where: { id }
        });
        return deletedLike;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default LikeService;
