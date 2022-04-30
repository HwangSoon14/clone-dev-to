import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { store } from './app/store';
import { Provider } from 'react-redux'
=======
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './app/store';
import './index.css';
>>>>>>> cdf6016793ff74ea4315cb63b6508e1ec609c2f7
ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <Provider store={store}>  
<<<<<<< HEAD
    <App />
=======

    <App />

>>>>>>> cdf6016793ff74ea4315cb63b6508e1ec609c2f7
  </Provider>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


