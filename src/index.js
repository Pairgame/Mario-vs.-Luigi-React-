import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router'
import App from './App';
import store, { history } from './store'
import registerServiceWorker from './registerServiceWorker';

// import './index.css';

ReactDOM.render(
  <App>
    <Route path="/" component={App}>
    </Route>
  </App>,
document.getElementById('root'));
registerServiceWorker();
