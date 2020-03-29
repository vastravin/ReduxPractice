import { User } from "../user/user";

export const USER_START_LOGIN = "USER_START_LOGIN";
export const USER_SUCCESS_LOGIN = "USER_SUCCESS_LOGIN";
export const USER_FAILED_LOGIN = "USER_FAILED_LOGIN";
export const USER_LOGGED_OUT = "USER_LOGGED_OUT";

export type UserActions =
  | UserStartLoginAction
  | UserSuccessLoginAction
  | UserFailedLoginAction
  | UserLoggedOutAction;

export interface UserStartLoginAction {
  type: typeof USER_START_LOGIN;
}

export interface UserSuccessLoginAction {
  type: typeof USER_SUCCESS_LOGIN;
  user: User;
}

export interface UserFailedLoginAction {
  type: typeof USER_FAILED_LOGIN;
  errorMessage: string;
}

export interface UserLoggedOutAction {
  type: typeof USER_LOGGED_OUT;
}
