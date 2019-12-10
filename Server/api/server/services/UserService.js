import database from '../src/models';

class UserService {
  static async getAllUsers() {
    try {
      return await database.User.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addUser(newUser) {
    try {
      return await database.User.create(newUser);
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(username, updateUser) {
    try {
      const UserToUpdate = await database.User.findOne({
        where: { username }
      });

      if (UserToUpdate) {
        await database.User.update(updateUser, { where: { username } });

        return updateUser;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getSingleUser(username) {
    try {
      const theUser = await database.User.findOne({
        where: { username }
      });

      return theUser;
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(email) {
    try {
      const UserToDelete = await database.User.findOne({ where: { email } });

      if (UserToDelete) {
        const deletedUser = await database.User.destroy({
          where: { email }
        });
        return deletedUser;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
