/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   App.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/02 14:54:18 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/02 17:40:11 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import injectTapEventPlugin from 'react-tap-event-plugin';

import store from '../redux/store';

import Body from './Body';
import Index from './Index/Index';
import Student from './Student/Student';
import Project from './Project/Project';

//injectTapEventPlugin(); // Needed for onTouchTap http://stackoverflow.com/a/34015469/988941

const App = () => (
  <AppContainer>
    <MuiThemeProvider theme={createMuiTheme()}>
      <Provider store={store}>
        <BrowserRouter>
          <Body>
            <Route exact path="/" component={Index} />
            <Route path="/student" component={Student} />
            <Route path="/projects" component={Project} />
          </Body>
        </BrowserRouter>
      </Provider>
    </MuiThemeProvider>
  </AppContainer>
);

export default App;
