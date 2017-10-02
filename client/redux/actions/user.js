import { createAction } from 'redux-actions';

const getAllUsersAPI = createAction('API:GET_ALL_USERS');
export const getAllUsers = () => (dispatch) => {
  dispatch(getAllUsersAPI({
    method: 'get',
    endpoint: '/getAllUsers',
  }));
};


export const ping = createAction('PING');
