import { MetaData } from "../../types/metaData/metaData";
import {
  MetaDataActions,
  META_DATA_START_LOADING,
  META_DATA_SUCCESS_LOADING,
  META_DATA_FAILED_LOADING
} from "../../types/actions/metaDataActions";

export type MetaDataState = {
  isLoading: boolean;
  errorMessage: string | null;
  metaData: MetaData | null;
};

const metaDataInitialState: MetaDataState = {
  isLoading: false,
  errorMessage: null,
  metaData: null
};

export const metaDataReducer = (
  state = metaDataInitialState,
  action: MetaDataActions
): MetaDataState => {
  switch (action.type) {
    case META_DATA_START_LOADING: {
      return {
        ...state,
        isLoading: true
      };
    }
    case META_DATA_SUCCESS_LOADING: {
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        metaData: action.metaData
      };
    }
    case META_DATA_FAILED_LOADING: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.errorMessage
      };
    }
    default:
      return state;
  }
};
