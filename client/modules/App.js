/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   App.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Julien de Magalhaes <julien@cinq-s.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/10/02 14:54:18 by Julien de M       #+#    #+#             */
/*   Updated: 2017/10/02 14:54:44 by Julien de M      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import injectTapEventPlugin from 'react-tap-event-plugin';

import store from '../redux/store';

import Header from './Header/Header';
import Main from './Main/Main';
import User from './User/User';

//injectTapEventPlugin(); // Needed for onTouchTap http://stackoverflow.com/a/34015469/988941

const MainApp = ({ children }) => (
  <div>
    <Header />
    <div
      style={{
        position: 'absolute',
        top: '72px',
        width: '100%',
      }}
    >
      {children}
    </div>
  </div>
);

const App = () => (
  <AppContainer>
    <MuiThemeProvider theme={createMuiTheme()}>
      <Provider store={store}>
        <BrowserRouter>
          <MainApp>
            <Route exact path="/" component={Main} />
            <Route path="/user" component={User} />
          </MainApp>
        </BrowserRouter>
      </Provider>
    </MuiThemeProvider>
  </AppContainer>
);

export default App;
