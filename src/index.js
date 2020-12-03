import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from './store';


ReactDOM.render(
  <React.StrictMode>
    <App store={Store} />
  </React.StrictMode>,
  document.getElementById('root')
);
