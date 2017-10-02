/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   api.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/29 11:26:19 by Julien de M       #+#    #+#             */
/*   Updated: 2017/09/29 12:27:12 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import queryString from 'query-string';
import axios from 'axios';

const apiMiddleware = (store) => (next) => async (action) => {
  if (!action.type.startsWith('API:')) return next(action);

  const prefix = action.type.split(':')[1];
  const { method = 'get', body, query, onSucceeded, onFailed } = action.payload;
  let url = action.payload.endpoint;
  const options = {
    method,
    headers: {},
  };

  if (query) {
    const params = queryString.stringify(query);
    url = `${url}?${params}`;
  }
  if (body) options.body = JSON.stringify(body);
  store.dispatch({ type: prefix });

  try {
    const response = await axios({ ...options, url });
    const isNetworkError = response.status < 200 || response.status >= 300;
    const { data } = response;
    const isAPIError = data.code < 200 || data.code >= 300 || data.status === 'error';

    const type = isNetworkError || isAPIError ? `$FAIL:${prefix}` : `SUCCESS:${prefix}`;
    store.dispatch({ type, payload: data });
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
