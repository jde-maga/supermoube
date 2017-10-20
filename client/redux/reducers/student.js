import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

const initialState = fromJS({
  apiState: 'OK',
  students: [],
  one: {},
  oneApiState: 'OK',
});

const studentReducer = handleActions({
  GET_ALL_STUDENTS: (state) => state.set('apiState', 'loading'),
  'SUCCESS:GET_ALL_STUDENTS': (state, { payload }) => state.mergeIn(['students'], fromJS(payload)).set('apiState', 'OK'),

  GET_ONE_STUDENT: (state) => state.set('oneApiState', 'loading'),
  'SUCCESS:GET_ONE_STUDENT': (state, { payload }) => state.set('one', fromJS(payload)).set('oneApiState', 'OK'),
}, initialState);

export default studentReducer;
