import { User } from "../../types/user/user";
import {
  UserActions,
  USER_START_LOGIN,
  USER_SUCCESS_LOGIN,
  USER_FAILED_LOGIN,
  USER_LOGGED_OUT
} from "../../types/actions/userActions";

export type UserState = {
  user: User | null;
  isLoading: boolean;
  authRequestWasSent: boolean;
  loginErrorMessage: string;
};

const userInitialState: UserState = {
  user: {
    id: "1",
    userName: "Rikatto",
    profile: {
      name: "Vasyl Travin",
      birthDate: "23/10/1992"
    },
    cart: []
  },
  isLoading: false,
  authRequestWasSent: false,
  loginErrorMessage: ""
};

export const userReducer = (
  state = userInitialState,
  action: UserActions
): UserState => {
  switch (action.type) {
    case USER_START_LOGIN:
      return {
        ...state,
        isLoading: true
      };
    case USER_SUCCESS_LOGIN: {
      return {
        ...state,
        isLoading: false,
        authRequestWasSent: true,
        user: action.user,
        loginErrorMessage: ""
      };
    }
    case USER_FAILED_LOGIN: {
      return {
        ...state,
        isLoading: false,
        authRequestWasSent: true,
        loginErrorMessage: action.errorMessage
      };
    }
    case USER_LOGGED_OUT: {
      return { ...state, user: null };
    }
    default:
      return state;
  }
};
