import {
  UserStartLoginAction,
  USER_START_LOGIN,
  UserSuccessLoginAction,
  USER_SUCCESS_LOGIN,
  UserFailedLoginAction,
  USER_FAILED_LOGIN,
  UserLoggedOutAction,
  USER_LOGGED_OUT
} from "../../types/actions/userActions";
import { User } from "../../types/user/user";

export const userStartLoginAction = (): UserStartLoginAction => {
  return { type: USER_START_LOGIN };
};

export const userSuccessLoginAction = (user: User): UserSuccessLoginAction => {
  return {
    type: USER_SUCCESS_LOGIN,
    user: user
  };
};

export const userFailedLoginAction = (
  errorMessage: string
): UserFailedLoginAction => {
  return {
    type: USER_FAILED_LOGIN,
    errorMessage: errorMessage
  };
};

export const userLoggedOutAction = (): UserLoggedOutAction => {
  return {
    type: USER_LOGGED_OUT
  };
};
