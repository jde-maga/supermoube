import { createAction } from 'redux-actions';

const getAllProjectsAPI = createAction('API:GET_ALL_PROJECTS');
export const getAllProjects = () => (dispatch) => {
  dispatch(getAllProjectsAPI({
    method: 'get',
    endpoint: '/api/getAllProjects',
  }));
};

