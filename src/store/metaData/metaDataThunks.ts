import { IMetaDataService } from "../../services/metaDataService/IMetaDataService";
import { Dispatch } from "redux";
import { AppActions } from "../../types/actions/appActions";
import { AppState } from "../store";
import {
  startMetaDataLoadingAction,
  successMetaDataLoadingAction,
  failedMetaDataLoadingAction
} from "./metaDataActions";

export const getMetaData = (metaDataService: IMetaDataService) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState): void => {
    dispatch(startMetaDataLoadingAction());

    metaDataService.getMetaData().then(res => {
      if (res) {
        dispatch(successMetaDataLoadingAction(res));
        return;
      }

      dispatch(failedMetaDataLoadingAction("Meta data loading failed!"));
    });
  };
};
