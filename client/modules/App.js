import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from '../redux/store';

const App = () => (
  <AppContainer>
    <Provider store={store}>
      <BrowserRouter>
        <div>
          {/*<Route path="/" component={} />*/}
        </div>
      </BrowserRouter>
    </Provider>
  </AppContainer>
);

export default App;
