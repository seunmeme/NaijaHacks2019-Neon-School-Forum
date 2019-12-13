import { actionTypes } from '../actionTypes';

export const students = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.REGISTER_STUDENT:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false
      }
    default:
      return state;
  }
};
