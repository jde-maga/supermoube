import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import me from './me';
import project from './project';

// COMBINE THE REDUCERS
export default combineReducers({
  form: formReducer,
  me,
  project,
});
