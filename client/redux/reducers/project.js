import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

const initialState = fromJS({
  recentProjects: {},
});

const projectReducer = handleActions({
  GET_RECENT_PROJECTS: (state, { payload }) => state.set('recentProjects', fromJS(payload)),
}, initialState);

export default projectReducer;
