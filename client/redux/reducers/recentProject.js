/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   recentProject.js                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/12 03:40:30 by jde-maga          #+#    #+#             */
/*   Updated: 2017/11/27 06:07:36 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import moment from 'moment-timezone';

const initialState = fromJS({
  recentProjects: [],
  nextPage: 1,
  apiState: 'OK',
});

const projectReducer = handleActions({

  GET_RECENT_PROJECTS: (state) => state
    .set('apiState', 'loading')
    .set('nextPage', state.get('nextPage') + 1),

  'SUCCESS:GET_RECENT_PROJECTS': (state, { payload }) => state
    .set('recentProjects', fromJS([...state.get('recentProjects'), ...payload]))
    .set('apiState', 'OK'),
}, initialState);

export default projectReducer;
