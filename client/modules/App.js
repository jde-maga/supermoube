import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import injectTapEventPlugin from 'react-tap-event-plugin';

import store from '../redux/store';

import Header from './Header/Header';
import Main from './Main/Main';
import User from './User/User';

//injectTapEventPlugin(); // Needed for onTouchTap http://stackoverflow.com/a/34015469/988941

const App = () => (
  <AppContainer>
    <Provider store={store}>
      <BrowserRouter>
        <MuiThemeProvider theme={createMuiTheme()}>
          <div>
            <Header />
            <Route exact path="/" component={Main} />
            <Route path="/user" component={User} />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    </Provider>
  </AppContainer>
);

export default App;
