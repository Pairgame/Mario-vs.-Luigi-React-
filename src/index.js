import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from "react-router";
import App from "./App";
import store, { history } from "./store";
import registerServiceWorker from "./registerServiceWorker";
import injectTapEventPlugin from "react-tap-event-plugin";
import SignUp from './users/SignUp'
import SignIn from './users/SignIn'
import Lobby from './games/Lobby'
// import './index.css';

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} >
        <IndexRoute component={Lobby} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
