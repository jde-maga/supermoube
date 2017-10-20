import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

const initialState = fromJS({
  projects: [],
});

const projectReducer = handleActions({
  'SUCCESS:GET_ALL_PROJECTS': (state, { payload }) => state.set('projects', fromJS(payload)),
}, initialState);

export default projectReducer;
