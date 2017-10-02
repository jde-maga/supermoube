import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import RedBox from 'redbox-react';

import App from './modules/App';

const MOUNT_NODE = document.getElementById('react-index-root');

const renderRoots = () => {
  render(
    <App />,
    MOUNT_NODE,
  );
};

const renderError = (error) => {
  render(<RedBox error={error} />, MOUNT_NODE);
};

if (module.hot) {
  module.hot.accept('./modules/App', () => {
    setImmediate(() => {
      unmountComponentAtNode(MOUNT_NODE);
      try {
        renderRoots();
      } catch (e) {
        renderError(e);
      }
    });
  });
}

renderRoots();
