import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


// IMPORT REDUCERS TO BE COMBINED

// COMBINE THE REDUCERS
export default combineReducers({
  form: formReducer,
});
