import { createStore, applyMiddleware } from "redux";
import { rootReducer, history } from "./rootReducer";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { AppActions } from "../types/actions/appActions";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk as ThunkMiddleware<AppState, AppActions>,
      routerMiddleware(history)
    )
  )
);
