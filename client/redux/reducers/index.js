import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import me from './me';
import project from './project';
import student from './student';

export default combineReducers({
  form: formReducer,
  me,
  project,
  student,
});
