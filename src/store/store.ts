import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { AppActions } from "../types/actions/appActions";
import { composeWithDevTools } from "redux-devtools-extension";

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
  )
);
