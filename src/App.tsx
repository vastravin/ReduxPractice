import React, { useEffect } from "react";
import "./App.css";
import AppRouter from "./router/router";
import Menu from "./components/menu/menu";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "./types/actions/appActions";
import { bindActionCreators } from "redux";
import { getMetaData } from "./thunks/metaDataThunks";
import { IMetaDataService } from "./services/metaDataService/IMetaDataService";
import { connect } from "react-redux";
import { useInjection } from "./ioc.react";
import { META_DATA_SERVICE_NAME } from "./constants";

type Props = LinkDispatchProps;

const App: React.FC<Props> = ({ getMetaData }) => {
  const metaDataService: IMetaDataService = useInjection<IMetaDataService>(
    META_DATA_SERVICE_NAME
  );

  useEffect(() => {
    getMetaData(metaDataService);
  }, [getMetaData, metaDataService]);

  return (
    <>
      <Menu />
      <AppRouter />
    </>
  );
};

type LinkDispatchProps = {
  getMetaData: (metaDataService: IMetaDataService) => void;
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => {
  return {
    getMetaData: bindActionCreators(getMetaData, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(App);
