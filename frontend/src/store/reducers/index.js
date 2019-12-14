import { actionTypes } from '../actionTypes';
import {token} from '../../utils/authHelper';

const initialState = token ? {
  isAuthenticated: true,
  loading: false,
  ...token
} : {
  isAuthenticated: false,
  loading: false,
  errorMessage: null
}
export const students = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.AUTH_REQUEST_LOADING:
      return {
        ...state,
        loading: true
      }
    case actionTypes.REGISTER_STUDENT:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false
      }
    case actionTypes.SIGNUP_STUDENT_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false
      }
    case actionTypes.LOGIN_STUDENT_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false
      }
    case actionTypes.LOGIN_STUDENT_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isAuthenticated: false,
        loading: false
      }
    case actionTypes.SIGNUP_STUDENT_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isAuthenticated: false,
        loading: false
      }
    default:
      return state;
  }
};

export const topics = (state = {loading: false, isCreated: false}, action) => {
  switch(action.type) {
    case actionTypes.CREATE_TOPIC_REQUEST_LOADING:
      return {
        ...state,
        loading: true
      }
    case actionTypes.CREATE_TOPIC_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isCreated: true,
        loading: false
      }
    case actionTypes.CREATE_TOPIC_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isCreated: false,
        loading: false
      }
    case actionTypes.GET_TOPIC_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case actionTypes.GET_TOPIC_BY_CATEGORY_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      }
    default:
      return state;
  }
};

export const singleTopic = (state = {}, action) => {
  switch(action.type) {
    case actionTypes.GET_SINGLE_TOPIC_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case actionTypes.GET_SINGLE_TOPIC_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      }
    default:
      return state;
  }
};

export const comments = (state = {}, action) => {
  switch(action.type) {
    case actionTypes.GET_TOPIC_COMMENT_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case actionTypes.GET_TOPIC_COMMENT_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      }
    default:
      return state;
  }
};

export const discussions = (state = {}, action) => {
  switch(action.type) {
    case actionTypes.GET_DISCUSSIONS_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case actionTypes.GET_DISCUSSIONS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      }
    default:
      return state;
  }
};
