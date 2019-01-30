/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import symbolReducer from './reducers';
import './index.css';
import * as serviceWorker from './serviceWorker';
import CalculatorContainer from './containers/CalculatorContainer';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  symbolReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <CalculatorContainer />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
