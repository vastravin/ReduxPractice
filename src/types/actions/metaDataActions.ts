import { MetaData } from "../metaData/metaData";

export const META_DATA_START_LOADING = "META_DATA_START_LOADING";
export const META_DATA_SUCCESS_LOADING = "META_DATA_SUCCESS_LOADING";
export const META_DATA_FAILED_LOADING = "META_DATA_FAILED_LOADING";

export type MetaDataActions =
  | MetaDataStartLoadingAction
  | MetaDataSuccessLoadingAction
  | MetaDataFailedLoadingAction;

export interface MetaDataStartLoadingAction {
  type: typeof META_DATA_START_LOADING;
}

export interface MetaDataSuccessLoadingAction {
  type: typeof META_DATA_SUCCESS_LOADING;
  metaData: MetaData;
}

export interface MetaDataFailedLoadingAction {
  type: typeof META_DATA_FAILED_LOADING;
  errorMessage: string;
}
