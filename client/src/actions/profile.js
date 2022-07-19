import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_PROFILE,
  PROFILE_ERRORS,
  GET_PROFILES,
  CLEAR_PROFILE,
  DELETE_ACCOUNT,
} from './types';

//Get current users profile

export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/profile/me');
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERRORS,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create or update profile
export const createProfile = (formData, history, edit = false) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post('/api/profile', formData, config);
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created'));

    if (!edit) {
      history.push('/dashboard');
    }
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: PROFILE_ERRORS,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//get all profiles

export const getProfiles = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/profile');
    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERRORS,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//get allprofiles byId

export const getProfilebyId = (userId) => async (dispatch) => {
  try {
    const res = await axios.get('/api/profile/user/${userId}');
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERRORS,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//delete profile

export const deleteAccount = () => async (dispatch) => {
  if (window.confirm('Are you sure you want to delete your Account?')) {
    try {
      const res = await axios.delete('/api/profile');
      dispatch({
        type: CLEAR_PROFILE,
      });
      dispatch({
        type: DELETE_ACCOUNT,
      });
      dispatch(setAlert('Your Account has been permanently deleted'));
    } catch (err) {
      dispatch({
        type: PROFILE_ERRORS,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  }
};
