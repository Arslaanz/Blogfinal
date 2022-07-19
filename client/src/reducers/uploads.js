import {
  GET_UPLOADS,
  UPLOADS_ERROR,
  GET_UPLOAD,
  UPLOAD_ERROR,
  GET_SINGLE,
  GET_SINGLE_ERROR,
  GET_BLOGS,
  GET_BLOGS_ERROR,
  GET_ALL_BLOGS,
  GET_ALL_BLOGS_ERROR
} from '../actions/types';

const initialState = {
  upload: null,
  uploads: [],
  blogs: [],
  allblogs:[],
  single: null, 
  loadingallblogs: true,
  loadingsingle: true,
  loadingblogs: true,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_UPLOAD:
      return {
        ...state,
        upload: payload,
        loading: false,
      };
    
      case GET_UPLOADS:
      return {
        ...state,
        uploads: payload,
        loading: false,
      };
  

    case GET_BLOGS:
      return {
        ...state,
        blogs: payload,
        loadingblogs: false,
       
      };

      case GET_SINGLE:
        return {
          ...state,
          single: payload,
          loadingsingle: false,
        };

    case GET_ALL_BLOGS:
          return {
            ...state,
            allblogs: payload,
            loadingallblogs: false,
          };

    case GET_ALL_BLOGS_ERROR:
    case GET_BLOGS_ERROR:    
    case GET_SINGLE_ERROR:
    case UPLOADS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        loadingsingle: false,
        loadingallblogs:false,
        loadingblogs: false,
      };
    case UPLOAD_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,

      };
    default:
      return state;
  }
}
