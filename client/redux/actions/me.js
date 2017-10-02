import { createAction } from 'redux-actions';

const getMeAPI = createAction('API:GET_ME');
export const getMe = () => (dispatch) => {
  dispatch(getMeAPI({
    method: 'get',
    endpoint: '/me',
  }));
};

export const ping = createAction('PING');
