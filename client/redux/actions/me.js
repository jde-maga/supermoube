import { createAction } from 'redux-actions';
import axios from 'axios';

const apiGetMe = createAction('GET_ME');
export const getMe = () => async (dispatch) => {
  const auth = await axios.get('/me');
  dispatch(apiGetMe(auth.data));
};

export const ping = createAction('PING');
