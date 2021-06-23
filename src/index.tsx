import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';

import todoStore from './stores';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider todoStore={todoStore} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);