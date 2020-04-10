import { IUserService } from "../services/userService/IUserService";
import { Dispatch } from "react";
import { AppActions } from "../types/actions/appActions";
import { AppState } from "../store/store";
import {
  userStartLoginAction,
  userFailedLoginAction,
  userSuccessLoginAction,
  userLoggedOutAction,
} from "../store/user/userActions";
import { UserLoginForm } from "../types/user/userLogin";
import { HOME_PAGE_URL, LOGIN_PAGE_URL } from "../constants";
import { push } from "connected-react-router";
import { RouterMemoryState } from "../store/routerMemory/routerMemoryReducer";


export const userLogin = (
  userLoginForm: UserLoginForm,
  userService: IUserService
) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(userStartLoginAction());

    userService.login(userLoginForm).then((res) => {
      if (!res) {
        dispatch(userFailedLoginAction("Incorrect username or password"));
        return;
      }

      dispatch(userSuccessLoginAction(res));

      const routerMemoryState: RouterMemoryState = getState().routerMemory;

      const memorizedPath: string | null = routerMemoryState.memorizedPath;
      const memorizedMethod: (() => void) | null =
        routerMemoryState.memorizedMethod;

      if (memorizedMethod) {
        memorizedMethod();
      }

      if (memorizedPath) {
        dispatch(push(memorizedPath));
        return;
      }

      dispatch(push(HOME_PAGE_URL));
    });
  };
};

export const userLogout = () => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
    dispatch(userLoggedOutAction());
    dispatch(push(LOGIN_PAGE_URL));
  };
};
