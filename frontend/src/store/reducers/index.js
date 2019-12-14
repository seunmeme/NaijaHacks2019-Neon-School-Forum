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
    default:
      return state;
  }
};
