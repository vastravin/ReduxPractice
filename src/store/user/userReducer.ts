import { User } from "../../types/user/user";
import {
  UserActions,
  USER_START_LOADING,
  USER_SUCCESS_LOGIN,
  USER_FAILED_LOGIN,
  USER_LOGGED_OUT
} from "../../types/actions/userActions";

export type UserState = {
  user: User | null;
  isLoading: boolean;
  authRequestWasSent: boolean;
};

const userInitialState: UserState = {
  user: null,
  isLoading: false,
  authRequestWasSent: false
};

export const userReducer = (
  state = userInitialState,
  action: UserActions
): UserState => {
  switch (action.type) {
    case USER_START_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case USER_SUCCESS_LOGIN: {
      return {
        ...state,
        isLoading: false,
        authRequestWasSent: true,
        user: action.user
      };
    }
    case USER_FAILED_LOGIN: {
      return {
        ...state,
        isLoading: false,
        authRequestWasSent: true
      };
    }
    case USER_LOGGED_OUT: {
      return {
        ...state,
        isLoading: false,
        authRequestWasSent: false,
        user: null
      };
    }
    default:
      return state;
  }
};
