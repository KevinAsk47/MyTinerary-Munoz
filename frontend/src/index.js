import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import mainReducer from './redux/reducers/mainReducer'
import thunk from 'redux-thunk';

const miStore = createStore(mainReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={miStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
