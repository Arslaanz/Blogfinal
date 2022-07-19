import axios from 'axios';
import { GET_UPLOADS,GET_ALL_BLOGS, GET_ALL_BLOGS_ERROR, GET_BLOGS, GET_BLOGS_ERROR, GET_SINGLE, GET_SINGLE_ERROR,UPLOADS_ERROR, GET_UPLOAD, UPLOAD_ERROR } from './types';

//Get Upload
export const getUpload = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/upload/indiviual');

    dispatch({
      type: GET_UPLOAD,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: UPLOAD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getsingle = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/upload/single/${id}`);

    dispatch({
      type: GET_SINGLE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_SINGLE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
//Get Uploads
export const getUploads = (id) => async (dispatch) => {
  try {
 
    const res = await axios.get(`/api/upload/${id}`);
    console.log(`/api/upload/${id}`)
    dispatch({
      type: GET_UPLOADS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: UPLOADS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getblogs = (id) => async (dispatch) => {
  try {
 
    const res = await axios.get(`/api/upload/last/five/uploads`);
   
    dispatch({
      type: GET_BLOGS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_BLOGS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getblogsall = () => async (dispatch) => {
  try {
 
    const res = await axios.get(`/api/upload/`);
   
    dispatch({
      type: GET_ALL_BLOGS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ALL_BLOGS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// update blog
export const editblog = (formData, history, edit = false) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post(`/api/upload/edit`, formData, config);
    console.log('resss')
console.log(res)
   // dispatch(setAlert(edit ? 'Blog Updated' : 'blog Created'));

    if (!edit) {
      history.push('/dashboard');
    }
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      //errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    
  }
};

export const deletePost = (id) => async (dispatch) => {
  console.log('jelll')
  try {
    const res = await axios.delete(`/api/upload/${id}`);

   console.log(res)
    window.location.reload(false)
   
  } catch (err) {
    
  }
};