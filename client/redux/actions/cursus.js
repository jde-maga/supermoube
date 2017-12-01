/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   cursus.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/12/01 17:20:40 by jde-maga          #+#    #+#             */
/*   Updated: 2017/12/01 17:21:54 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { createAction } from 'redux-actions';

const getCursusAPI = createAction('API:GET_CURSUS');
export const getCursus = () => (dispatch) => {
  dispatch(getCursusAPI({
    method: 'get',
    endpoint: '/api/cursus',
  }));
};

export default null;

