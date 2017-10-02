import { createAction } from 'redux-actions';

const getAllProjectsAPI = createAction('API:GET_ALL_PROJECTS');
export const getAllProjects = () => (dispatch) => {
  dispatch(getAllProjectsAPI({
    method: 'get',
    endpoint: '/api/getAllProjects',
  }));
};

const getRecentProjectsAPI = createAction('API:GET_RECENT_PROJECTS');
export const getRecentProjects = () => (dispatch) => {
  dispatch(getRecentProjectsAPI({
    method: 'get',
    endpoint: '/api/getRecentProjects',
    query: {
      sort: '-updated_at',
    },
  }));
};
