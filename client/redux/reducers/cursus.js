/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   cursus.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/12/01 17:22:06 by jde-maga          #+#    #+#             */
/*   Updated: 2017/12/01 17:24:33 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

const initialState = fromJS({
  cursus: [],
  apiState: 'OK',
});

const cursusReducer = handleActions({

  GET_CURSUS: (state) => state.set('apiState', 'loading'),

  'SUCCESS:GET_CURSUS': (state, { payload }) => state
    .set('cursus', fromJS(payload))
    .set('apiState', 'OK'),
}, initialState);

export default cursusReducer;
