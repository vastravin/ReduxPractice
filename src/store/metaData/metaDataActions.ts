import {
  MetaDataStartLoadingAction,
  META_DATA_START_LOADING,
  MetaDataSuccessLoadingAction,
  META_DATA_SUCCESS_LOADING,
  MetaDataFailedLoadingAction,
  META_DATA_FAILED_LOADING
} from "../../types/actions/metaDataActions";
import { MetaData } from "../../types/metaData/metaData";

export const startMetaDataLoadingAction = (): MetaDataStartLoadingAction => {
  return {
    type: META_DATA_START_LOADING
  };
};

export const successMetaDataLoadingAction = (
  metaData: MetaData
): MetaDataSuccessLoadingAction => {
  return {
    type: META_DATA_SUCCESS_LOADING,
    metaData: metaData
  };
};

export const failedMetaDataLoadingAction = (
  errorMessage: string
): MetaDataFailedLoadingAction => {
  return {
    type: META_DATA_FAILED_LOADING,
    errorMessage: errorMessage
  };
};
