import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router'
import App from './App';
import store, { history } from './store'
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin'
// import './index.css';

injectTapEventPlugin();

ReactDOM.render(
  <App>
    <Route path="/" component={App}>
    </Route>
  </App>,
document.getElementById('root'));
registerServiceWorker();
