import { createAction } from 'redux-actions';

const getAllStudentsAPI = createAction('API:GET_ALL_STUDENTS');
export const getAllStudents = () => (dispatch) => {
  dispatch(getAllStudentsAPI({
    method: 'get',
    endpoint: '/api/getAllStudents',
  }));
};

export const ping = createAction('PING');
