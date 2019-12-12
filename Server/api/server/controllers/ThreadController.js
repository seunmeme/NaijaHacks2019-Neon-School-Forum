require('dotenv').config();
import ThreadService from '../services/ThreadService';
import Util from '../utils/Utils';

const util = new Util();

class ThreadController {

    static async addThread(req, res) {

        if ( !req.body.content ) {
            util.setError(400, 'Please provide content');
            return util.send(res);
          }
          const newThread = {...req.body, discussionId: req.params.discussionId, };
          try {
            const createdThread = await ThreadService.addThread(newThread);
            const user = req.user
            util.setSuccess(201, 'Thread Added!', {createdThread, user});
            return util.send(res);
          } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
          }
      }

    static async getAllThread(req, res) {
        try {
          const allThreads = await ThreadService.getAllThreads();
          if (allThreads.length > 0) {
            util.setSuccess(200, 'Threads retrieved', allThreads);
          } else {
            util.setSuccess(200, 'No Thread found');
          }
          return util.send(res);
        } catch (error) {
          util.setError(400, error.message);
          return util.send(res);
        }
      }

  static async updateThread(req, res) {
    const alteredThread = req.body;
    const { ThreadId } = req.params;
    try {
      const updateThread = await ThreadService.updateThread(ThreadId, alteredThread);
      if (!updateThread) {
        util.setError(404, `Cannot find Thread with the id: ${ThreadId}`);
      } else {
        util.setSuccess(200, 'Thread updated', updateThread);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }


}

export default ThreadController;