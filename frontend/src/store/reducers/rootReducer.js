import {combineReducers} from 'redux';

import {
  students,
  topics,
  singleTopic,
  comments,
} from './';

export default combineReducers({
  students,
  topics,
  singleTopic,
  comments,
});
