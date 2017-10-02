import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

const initialState = fromJS({
  students: [],
});

const studentReducer = handleActions({
  'SUCCESS:GET_ALL_STUDENTS': (state, { payload }) => state.set('students', fromJS(payload)),
}, initialState);

export default studentReducer;
