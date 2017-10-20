/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   App.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/02 14:54:18 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/18 16:05:57 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import injectTapEventPlugin from 'react-tap-event-plugin';

import store from '../redux/store';

import Body from './Body';
import Index from './Index/Index';
import RecentProjects from './RecentProjects/RecentProjects';
import Student from './Student/Student';
import OneStudent from './OneStudent/OneStudent';
import Project from './Project/Project';

//injectTapEventPlugin(); // Needed for onTouchTap http://stackoverflow.com/a/34015469/988941

const App = () => (
  <AppContainer>
    <MuiThemeProvider theme={createMuiTheme()}>
      <Provider store={store}>
        <BrowserRouter>
          <Body>
            <Switch>
              <Route path="/recentProjects" component={RecentProjects} />
              <Route exact path="/student" component={Student} />
              <Route path="/student/:id" component={OneStudent} />
              <Route path="/projects" component={Project} />
              <Route component={Index} />
            </Switch>
          </Body>
        </BrowserRouter>
      </Provider>
    </MuiThemeProvider>
  </AppContainer>
);

export default App;
