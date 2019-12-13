import axios from 'axios';
import { toast } from "react-toastify";
import { actionTypes } from '../actionTypes';
import { setToken, configUser } from '../../utils/authHelper';


export const authRequest = {
  type: actionTypes.AUTH_REQUEST_LOADING
}

export const loginStudent = (user, closeLoginModal) => {
  console.log('action')
  return (dispatch) => {
    dispatch(authRequest);
    return axios.post("/api/v1/neonSchoolForum/login", user)
    .then((response) => {
        dispatch({
          type: actionTypes.LOGIN_STUDENT_SUCCESS,
          payload: response.data,
        })
        setToken(response.data)
        closeLoginModal()
        toast.success("Success Notification")
      })
      .catch((error) => {
        if(error.response) {
          dispatch({
            type: actionTypes.LOGIN_STUDENT_FAILURE,
            payload: error.response.data.message
          })
        }
      })
    }
}