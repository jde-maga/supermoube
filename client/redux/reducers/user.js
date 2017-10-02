import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

const initialState = fromJS({
  users: {},
});

const userReducer = handleActions({
  'SUCCESS:GET_ALL_USERS': (state, { payload }) => state.set('users', fromJS(payload)),
}, initialState);

export default userReducer;
