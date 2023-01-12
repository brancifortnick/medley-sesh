import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import configureStore from "./store";
import { ModalProvider } from "./context/Modal";
import { Context as ResponsiveContext } from "react-responsive";
import { renderToString } from "react-dom/server";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <Provider store={store}>
        <ResponsiveContext.Provider value={{ width: 500 }}>
          <App />
        </ResponsiveContext.Provider>
      </Provider>
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
