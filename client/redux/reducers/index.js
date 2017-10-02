import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import me from './me';
import project from './project';
import user from './user';

export default combineReducers({
  form: formReducer,
  me,
  project,
  user,
});
