import React from 'react';
import { Provider } from 'react-redux';

import './config/reactotron';
import store from './store/index';

import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
