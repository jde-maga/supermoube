import { createAction } from 'redux-actions';

const getRecentProjectsAPI = createAction('API:GET_RECENT_PROJECTS');
export const getRecentProjects = (data) => (dispatch) => {
  dispatch(getRecentProjectsAPI({
    method: 'get',
    endpoint: '/api/recentProjects',
    query: { page: data.page },
  }));
};

export const nu = null;
