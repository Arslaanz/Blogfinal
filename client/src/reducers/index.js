import { combineReducers } from 'redux';

import alert from './alert';
import auth from './auth';
import profile from './profile';

import uploads from './uploads';

export default combineReducers({
  alert,
  auth,
  profile,

  uploads,

});
