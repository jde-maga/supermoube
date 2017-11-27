import { createAction } from 'redux-actions';

const getAllStudentsAPI = createAction('API:GET_ALL_STUDENTS');
export const getAllStudents = (data) => (dispatch) => {
  dispatch(getAllStudentsAPI({
    method: 'get',
    endpoint: '/api/student',
    query: { page: data.page },
  }));
};

const getStudentAPI = createAction('API:GET_ONE_STUDENT');
export const getStudent = ({ id }) => (dispatch) => {
  dispatch(getStudentAPI({
    method: 'get',
    endpoint: `/api/student/${id}`,
  }));
};

export const ping = createAction('PING');
