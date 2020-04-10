export const ADD_PATH_TO_MEMORY = "ADD_PATH_TO_MEMORY";
export const CLEAR_ROUTER_MEMORY = "CLEAR_ROUTER_MEMORY";
export const ADD_METHOD_TO_MEMORY = "ADD_METHOD_TO_MEMORY";

export type RouterMemoryActions =
  | AddPathToMemoryAction
  | ClearRouteMemoryAction
  | AddMethodToMemoryAction;

export interface AddPathToMemoryAction {
  type: typeof ADD_PATH_TO_MEMORY;
  path: string;
}

export interface ClearRouteMemoryAction {
  type: typeof CLEAR_ROUTER_MEMORY;
}

export interface AddMethodToMemoryAction {
  type: typeof ADD_METHOD_TO_MEMORY;
  method: () => void;
}
