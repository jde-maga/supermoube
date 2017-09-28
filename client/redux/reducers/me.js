import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

const initialState = fromJS({});

const userReducer = handleActions({
  GET_ME: (state, { payload }) => fromJS(payload),
}, initialState);

export default userReducer;
