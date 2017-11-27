import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

const initialState = fromJS({
  apiState: 'OK',
  students: [],
  one: {},
  oneApiState: 'OK',
  nextPage: 1,
});

const studentReducer = handleActions({
  GET_ALL_STUDENTS: (state) => state
    .set('apiState', 'loading')
    .set('nextPage', state.get('nextPage') + 1),

  'SUCCESS:GET_ALL_STUDENTS': (state, { payload }) => state
    .set('students', fromJS([...state.get('students'), ...payload]))
    .set('apiState', 'OK'),

  GET_ONE_STUDENT: (state) => state.set('oneApiState', 'loading'),
  'SUCCESS:GET_ONE_STUDENT': (state, { payload }) => state.set('one', fromJS(payload)).set('oneApiState', 'OK'),
}, initialState);

export default studentReducer;
