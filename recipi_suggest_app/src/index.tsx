import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TopPage from "./topPage";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <TopPage />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
