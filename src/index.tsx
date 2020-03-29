import "reflect-metadata";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { container } from "./ioc";
import { Provider as ReduxProvider } from "react-redux";
import { Provider as DIProvider } from "./ioc.react";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./store/store";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./store/rootReducer";

ReactDOM.render(
  <DIProvider container={container}>
    <ReduxProvider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </ReduxProvider>
  </DIProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
