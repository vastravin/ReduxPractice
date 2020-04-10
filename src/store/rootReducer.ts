import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";
import { connectRouter } from "connected-react-router";
import { History, createBrowserHistory } from "history";
import { metaDataReducer } from "./metaData/metaDataReducer";
import { routerMemoryReducer } from "./routerMemory/routerMemoryReducer";

export const history: History<History.PoorMansUnknown> = createBrowserHistory();

export const rootReducer = combineReducers({
  router: connectRouter(history),
  routerMemory: routerMemoryReducer,
  userState: userReducer,
  metaDataState: metaDataReducer
});
