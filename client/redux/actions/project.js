import { createAction } from 'redux-actions';

const getAllProjectsAPI = createAction('API:GET_ALL_PROJECTS');
export const getAllProjects = (data) => (dispatch) => {
  dispatch(getAllProjectsAPI({
    method: 'get',
    endpoint: '/api/projects',
    query: { page: data.page },
  }));
};

const getProjectAPI = createAction('API:GET_PROJECT');
export const getProject = ({ id }) => (dispatch) => {
  dispatch(getProjectAPI({
    method: 'get',
    endpoint: `/api/projects/${id}`,
  }));
};
