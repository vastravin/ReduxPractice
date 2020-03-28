import { User } from "../user/user";

export const USER_START_LOADING = "USER_START_LOADING";
export const USER_SUCCESS_LOGIN = "USER_SUCCESS_LOGIN";
export const USER_FAILED_LOGIN = "USER_FAILED_LOGIN";
export const USER_LOGGED_OUT = "USER_LOGGED_OUT";

export type UserActions =
  | UserStartLoadingAction
  | UserSuccessLoginAction
  | UserFailedLoginAction
  | UserLoggedOut;

export interface UserStartLoadingAction {
  type: typeof USER_START_LOADING;
}

export interface UserSuccessLoginAction {
  type: typeof USER_SUCCESS_LOGIN;
  user: User;
}

export interface UserFailedLoginAction {
  type: typeof USER_FAILED_LOGIN;
}

export interface UserLoggedOut {
  type: typeof USER_LOGGED_OUT;
}
