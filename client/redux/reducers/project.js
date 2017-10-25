import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

const initialState = fromJS({
  projects: [],
  nextPage: 1,
});

const projectReducer = handleActions({
  'SUCCESS:GET_ALL_PROJECTS': (state, { payload }) => state
    .set('projects', fromJS([...state.get('projects'), ...payload]))
    .set('nextPage', state.get('nextPage') + 1),
}, initialState);

export default projectReducer;
