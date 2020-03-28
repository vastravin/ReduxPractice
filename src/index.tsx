import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { container } from "./ioc";
import { Provider as ReduxProvider } from "react-redux";
import { Provider as DIProvider } from "./ioc.react";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./store/store";

ReactDOM.render(
  <DIProvider container={container}>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>{" "}
  </DIProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
