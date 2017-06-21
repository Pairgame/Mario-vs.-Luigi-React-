import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from "react-router";
import App from "./App";
import store, { history } from "./store";
import registerServiceWorker from "./registerServiceWorker";
import injectTapEventPlugin from "react-tap-event-plugin";
// import './index.css';

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
