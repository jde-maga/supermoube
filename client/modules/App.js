import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from '../redux/store';

import Main from './Main/Main';
import User from './User/User';

const App = () => (
  <AppContainer>
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Main} />
          <Route path="/user" component={User} />
        </div>
      </BrowserRouter>
    </Provider>
  </AppContainer>
);

export default App;
