/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   recentProject.js                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/12 03:40:30 by jde-maga          #+#    #+#             */
/*   Updated: 2017/10/12 05:03:26 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import moment from 'moment-timezone';

const initialState = fromJS({
  recentProjects: {},
  nextPage: 1,
  nextDay: moment().format('YYYY-MM-DD'),
  apiState: 'OK',
});

const projectReducer = handleActions({

  GET_RECENT_PROJECTS: (state) => state.set('apiState', 'loading'),
  'SUCCESS:GET_RECENT_PROJECTS': (state, { payload }) => {
    const nextPage = state.get('nextPage') + 1;
    let recentProjects = state.get('recentProjects');
    let nextDay = state.get('nextDay');

    payload.forEach((project) => {
      if (!recentProjects.get(project.updatedAt.day)) {
        recentProjects = recentProjects.set(project.updatedAt.day, fromJS([]));
        nextDay = project.updatedAt.day;
      }
      recentProjects = recentProjects.update(project.updatedAt.day, (projectsArray) => fromJS([...projectsArray, project]));
    });
    return state
      .set('recentProjects', recentProjects)
      .set('nextPage', nextPage)
      .set('nextDay', nextDay)
      .set('apiState', 'OK');
  },
}, initialState);

export default projectReducer;
