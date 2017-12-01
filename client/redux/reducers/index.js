import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import me from './me';
import project from './project';
import student from './student';
import feed from './feed';

export default combineReducers({
  form: formReducer,
  me,
  project,
  student,
  feed,
});
