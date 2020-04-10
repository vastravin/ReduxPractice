import {
  RouterMemoryActions,
  ADD_PATH_TO_MEMORY,
  CLEAR_ROUTER_MEMORY,
  ADD_METHOD_TO_MEMORY,
} from "../../types/actions/routerMemoryActions";

export type RouterMemoryState = {
  memorizedPath: string | null;
  memorizedMethod: (() => void) | null;
};

const initialRouterMemoryState: RouterMemoryState = {
  memorizedPath: null,
  memorizedMethod: null,
};

export const routerMemoryReducer = (
  state = initialRouterMemoryState,
  action: RouterMemoryActions
) => {
  switch (action.type) {
    case ADD_PATH_TO_MEMORY: {
      return {
        ...state,
        memorizedPath: action.path,
      };
    }
    case ADD_METHOD_TO_MEMORY: {
      return {
        ...state,
        memorizedMethod: action.method,
      };
    }
    case CLEAR_ROUTER_MEMORY: {
      return initialRouterMemoryState;
    }
    default:
      return state;
  }
};
