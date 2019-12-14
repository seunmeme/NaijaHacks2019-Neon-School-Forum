import axios from 'axios';
import { toast } from "react-toastify";
import { actionTypes } from '../actionTypes';
import { setToken, configUser } from '../../utils/authHelper';


export const authRequest = {
  type: actionTypes.AUTH_REQUEST_LOADING
}

export const loginStudent = (user, closeLoginModal) => {
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


export const createTopicRequestLoading = {
  type: actionTypes.CREATE_TOPIC_REQUEST_LOADING
}

export const createTopic = (topic, closeTopicModal) => {
  return (dispatch) => {
    dispatch(createTopicRequestLoading);
    return axios.post("/api/v1/neonSchoolForum/users/topics", topic, configUser())
    .then((response) => {
        dispatch({
          type: actionTypes.CREATE_TOPIC_SUCCESS,
          payload: response.data,
        })
        toast.success("Success Notification")
        closeTopicModal()
      })
      .catch((error) => {
        if(error.response) {
          dispatch({
            type: actionTypes.CREATE_TOPIC_FAILURE,
            payload: error.response.data.message
          })
        }
      })
    }
}


export const getTopicsByCategory = (category) => {
  return (dispatch) => {
    return axios.get(`/api/v1/neonSchoolForum/topics/categories/${category}`)
    .then((response) => {
        // console.log(response, 'response')
        dispatch({
          type: actionTypes.GET_TOPIC_BY_CATEGORY_SUCCESS,
          payload: {
            [category]: response.data,
          }
        })
      })
      .catch((error) => {
        // console.log(error.response)
        if(error.response) {
          dispatch({
            type: actionTypes.GET_TOPIC_BY_CATEGORY_FAILURE,
            payload: error.response.data.message
          })
        }
      })
    }
}

