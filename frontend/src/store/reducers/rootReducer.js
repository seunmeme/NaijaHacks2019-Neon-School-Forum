import {combineReducers} from 'redux';

import {
  students,
  topics,
  singleTopic,
  comments,
  discussions,
} from './';

export default combineReducers({
  students,
  topics,
  singleTopic,
  comments,
  discussions,
});
