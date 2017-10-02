import { createAction } from 'redux-actions';

const getRecentProjectsAPI = createAction('API:GET_RECENT_PROJECTS');
export const getRecentProjects = () => (dispatch) => {
  dispatch(getRecentProjectsAPI({
    method: 'get',
    endpoint: '/recentProjects',
    query: {
      sort: '-updated_at',
    },
  }));
};

const getAllProjectsAPI = createAction('API:GET_ALL_PROJECTS');
export const getAllProjects = () => (dispatch) => {
  dispatch(getAllProjectsAPI({
    method: 'get',
    endpoint: '/getAllProjects',
  }));
};
