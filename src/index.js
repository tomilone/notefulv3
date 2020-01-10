import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import Store from './Store';


ReactDOM.render(
  <BrowserRouter>
    <App store={Store}/>
  </BrowserRouter>
  , document.getElementById('root'));


