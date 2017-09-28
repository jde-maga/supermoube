import { createAction } from 'redux-actions';

const GetRecentProjectsAPI = createAction('API:GET_RECENT_PROJECTS');
export const getRecentProjects = () => (dispatch) => {
  dispatch(GetRecentProjectsAPI({
    method: 'get',
    endpoint: '/projects_users',
  }));
};

export const ping = createAction('PING');
