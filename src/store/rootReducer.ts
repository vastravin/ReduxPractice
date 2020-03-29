import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";
import { connectRouter } from "connected-react-router";
import { History, createBrowserHistory } from "history";
import { metaDataReducer } from "./metaData/metaDataReducer";

export const history: History<History.PoorMansUnknown> = createBrowserHistory();

export const rootReducer = combineReducers({
  router: connectRouter(history),
  userState: userReducer,
  metaDataState: metaDataReducer
});
