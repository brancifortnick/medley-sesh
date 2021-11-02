import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import configureStore from "./store";
import * as sessionActions from "./store/session";
import * as commentActions from "./store/comment";
import * as musicianActions from "./store/videos";
import * as userActions from "./store/user";



const store = configureStore();

window.store = store;
window.sessionActions = sessionActions;
window.musicianActions = musicianActions;
window.commentActions = commentActions;
window.userActions = userActions;


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
