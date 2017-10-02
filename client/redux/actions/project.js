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

export const ping = createAction('PING');
