require('dotenv').config();
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserService from '../services/UserService';
import Util from '../utils/Utils';

const util = new Util();

class UserController {

  static async register(req, res) {
    if (!req.body.username || !req.body.email || !req.body.fullname || !req.body.school || !req.body.class || !req.body.password) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newUser = req.body;
    const theUser = await UserService.getSingleUser(newUser.username);

    if(theUser){
        util.setError(400, 'Username already exist!');
    }

    try {
      const createdUser = await UserService.addUser(newUser);
    //   console.log(newUser);
      const token = jwt.sign({createdUser}, process.env.SECRET_KEY);
            res.header('auth-token', token)
            util.setSuccess(201, 'User Registered!', token);
            return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async login(req, res) {
    if (!req.body.username || !req.body.password) {
      util.setError(401, 'Please provide complete details');
      return util.send(res);
    }
    if (req.body.password.length <= 6) {
      util.setError(400, 'Password cannot be less than 6 characters');
      return util.send(res);
    }
    // res.send(validPass);
    try {
        const User = req.body;
        const theUser = await UserService.getSingleUser(User.username);

        if(!theUser){
            util.setError(401, 'Username is not valid!');
        }

        const validPass = bcrypt.compareSync(User.password, theUser.password);

        if(!validPass){
            util.setError(401, 'Password is wrong!');
        }else{
          const token = jwt.sign({theUser}, process.env.SECRET_KEY);
            res.header('auth-token', token)
            util.setSuccess(200, 'User Logged in successfully!', token);
        }

      return util.send(res);

    } catch (error) {
      util.setError(400, 'Username is not valid');
      return util.send(res);
    }
  }

  static async updateUser(req, res) {
    const alteredUser = req.body;
    const { username } = req.params;
    try {
      const updateUser = await UserService.updateUser(username, alteredUser);
      if (!updateUser) {
        util.setError(404, `Cannot find user with the username: ${username}`);
      } else {
        util.setSuccess(200, 'User updated', updateUser);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getSingleUser(req, res) {
    const { userId } = req.params;

    if (!Number(userId)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theUser = await UserService.getUserById( userId );

      if (!theUser) {
        util.setError(404, `Cannot find User with the id ${userId}`);
      } else {
        util.setSuccess(200, 'Found User', theUser);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error.message);
      return util.send(res);
    }
  }


}

export default UserController;