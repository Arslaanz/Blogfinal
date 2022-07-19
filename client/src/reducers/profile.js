import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_ERRORS,
  CLEAR_PROFILE,
  SET_PROFILE_FLAG
} from '../actions/types';

const initialState = {
  hasProfile: false,
  profile: null,
  profiles: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE:
      localStorage.setItem('profile', true);
      return {
        ...state,
        profile: payload,
        loading: false,
        hasProfile: true
      };
    case SET_PROFILE_FLAG:
      return {
        ...state,
        hasProfile: true
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false,
      };
    case PROFILE_ERRORS:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_PROFILE:
      localStorage.removeItem('profile');
      return {
        ...state,
        proile: null,
        loading: false,
        hasProfile: false
      };
    default:
      return state;
  }
}
//Get All Profiles
