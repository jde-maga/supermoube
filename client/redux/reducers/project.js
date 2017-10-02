import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

const initialState = fromJS({
  recentProjects: [],
  projects: [],
});

const projectReducer = handleActions({
  'SUCCESS:GET_RECENT_PROJECTS': (state, { payload }) => state.set('recentProjects', fromJS(payload)),
  'SUCCESS:GET_ALL_PROJECTS': (state, { payload }) => state.set('projects', fromJS(payload)),
}, initialState);

export default projectReducer;
