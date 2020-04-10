import {
  AddPathToMemoryAction,
  ADD_PATH_TO_MEMORY,
  CLEAR_ROUTER_MEMORY,
  ClearRouteMemoryAction,
  AddMethodToMemoryAction,
  ADD_METHOD_TO_MEMORY
} from "../../types/actions/routerMemoryActions";

export const addPathToMemoryAction = (path: string): AddPathToMemoryAction => {
  return {
    type: ADD_PATH_TO_MEMORY,
    path: path
  };
};
export const addMethodToMemoryAction = (
  method: () => void
): AddMethodToMemoryAction => {
  return {
    type: ADD_METHOD_TO_MEMORY,
    method: method
  };
};

export const clearRouteMemoryAction = (): ClearRouteMemoryAction => {
  return {
    type: CLEAR_ROUTER_MEMORY
  };
};
