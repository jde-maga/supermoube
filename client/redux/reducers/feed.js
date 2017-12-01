/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   feed.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/12 03:40:30 by jde-maga          #+#    #+#             */
/*   Updated: 2017/12/01 15:53:19 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

const initialState = fromJS({
  feed: [],
  nextPage: 1,
  apiState: 'OK',
});

const projectReducer = handleActions({

  GET_FEED: (state) => state
    .set('apiState', 'loading')
    .set('nextPage', state.get('nextPage') + 1),

  'SUCCESS:GET_FEED': (state, { payload }) => state
    .set('feed', fromJS([...state.get('feed'), ...payload]))
    .set('apiState', 'OK'),
}, initialState);

export default projectReducer;
