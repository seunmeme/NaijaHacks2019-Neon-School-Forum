import { actionTypes } from '../actionTypes';
import {token} from '../../utils/authHelper';

console.log(token, 'token')
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
    default:
      return state;
  }
};
