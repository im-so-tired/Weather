import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import './style/bootstrap.min.css'
import { applyMiddleware, createStore  } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { Provider } from 'react-redux';


let initialState = {
  cities:[]
}
let store = createStore(reducer,initialState,applyMiddleware(thunk))
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


