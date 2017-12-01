import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

const initialState = fromJS({
  projects: [],
  nextPage: 1,
  apiState: 'OK',
  oneApiState: 'OK',
  one: {},
});

const projectReducer = handleActions({
  GET_ALL_PROJECTS: (state) => state.set('apiState', 'loading'),
  'SUCCESS:GET_ALL_PROJECTS': (state, { payload }) => state
    .set('projects', fromJS([...state.get('projects'), ...payload]))
    .set('nextPage', state.get('nextPage') + 1)
    .set('apiState', 'OK'),

  GET_PROJECT: (state) => state.set('oneApiState', 'loading'),
  'SUCCESS:GET_PROJECT': (state, { payload }) => state.set('one', fromJS(payload)).set('oneApiState', 'OK'),
}, initialState);

export default projectReducer;
