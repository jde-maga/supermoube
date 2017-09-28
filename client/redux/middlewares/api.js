
/**
 * Dependencies
 */

import queryString from 'query-string';
import axios from 'axios';

/**
 * Middleware
 */

const apiMiddleware = store => next => async (action) => {
  if (!action.type.startsWith('API:')) return next(action);

  const prefix = action.type.split(':')[1];
  const { method = 'get', body, query, args, onSucceeded, onFailed } = action.payload;
  let { endpoint } = action.payload;
  const state = store.getState();
  const { me } = state;
  const token = me.get('accessToken');
  const options = {
    method,
    headers: {},
  };

  if (token) options.headers.Authorization = `Bearer ${token}`;
  if (query) {
    const params = queryString.stringify(query);
    endpoint = `${endpoint}?${params}`;
  }
  if (body) options.body = JSON.stringify(body);
  store.dispatch({ type: prefix });

  try {
    const apiUrl = 'https://api.intra.42.fr/v2';
    const response = await fetch('https://api.intra.42.fr/v2/projects_users', options);

    const isNetworkError = response.status < 200 || response.status >= 300;
    const data = await response.json();
    const isAPIError = data.code < 200 || data.code >= 300 || data.status === 'error';

    const type = isNetworkError || isAPIError ? `$FAIL:${prefix}` : `SUCCESS:${prefix}`;
    store.dispatch({ type, payload: { ...data, args } });
    if (onSucceeded && !isAPIError) onSucceeded(data);
    if (onFailed && isAPIError) onFailed(data);

    return data;
  } catch (error) {
    store.dispatch({ type: `${prefix}_FAILED`, error });

    if (onFailed) {
      onFailed(error);
    }
  }
  return null;
};

/**
 * Interface
 */

export default apiMiddleware;
