import { createAction } from 'redux-actions';

const getFeedAPI = createAction('API:GET_FEED');
export const getFeed = (data) => (dispatch) => {
  dispatch(getFeedAPI({
    method: 'get',
    endpoint: '/api/feed',
    query: { page: data.page },
  }));
};
