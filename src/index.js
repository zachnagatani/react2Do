import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import LogoContainer from './components/logo';
import { Provider } from 'react-redux';
import { store } from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
