import { UserActions } from "./userActions";
import { RouterAction } from "connected-react-router";
import { MetaDataActions } from "./metaDataActions";
import { RouterMemoryActions } from "./routerMemoryActions";

export type AppActions =
  | UserActions
  | MetaDataActions
  | RouterMemoryActions
  | RouterAction;
