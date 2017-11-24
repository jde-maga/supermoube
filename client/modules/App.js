/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   App.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/02 14:54:18 by Julien de M       #+#    #+#             */
/*   Updated: 2017/11/23 03:08:32 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import store from '../redux/store';

import Body from './Body';
import Index from './Index/Index';

import Feed from './Feed/Feed';

import RecentProjects from './RecentProjects/RecentProjects';
import Student from './Student/Student';
import OneStudent from './OneStudent/OneStudent';
import Project from './Project/Project';

const App = () => (
  <AppContainer>
    <Provider store={store}>
      <BrowserRouter>
        <Body>
          <Switch>
            <Route path="/feed" component={Feed} />
            <Route exact path="/students" component={Student} />
            <Route path="/students/:id" component={OneStudent} />
            <Route path="/projects" component={Project} />
            <Route component={Index} />
          </Switch>
        </Body>
      </BrowserRouter>
    </Provider>
  </AppContainer>
);

export default App;
