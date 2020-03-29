import { UserActions } from "./userActions";
import { RouterAction } from "connected-react-router";
import { MetaDataActions } from "./metaDataActions";

export type AppActions = UserActions | MetaDataActions | RouterAction;
