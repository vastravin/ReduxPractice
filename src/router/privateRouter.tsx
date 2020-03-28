import React from "react";
import { connect } from "react-redux";
import { User } from "../types/user/user";
import { AppState } from "../store/store";
import { HOME_PAGE_URL, LOGIN_PAGE_URL } from "../constants";
import { Switch, Route } from "react-router";
import { Redirect } from "react-router-dom";
import HomePage from "../components/homePage/homePage";

type Props = LinkStateProps;

const privateRoute: React.ReactElement = (
  <Switch>
    <Route exactPath={HOME_PAGE_URL} component={HomePage} />
  </Switch>
);

const PrivateRouter: React.FC<Props> = ({ user }) => {
  if (!user) {
    return <Redirect to={LOGIN_PAGE_URL} />;
  }

  return privateRoute;
};

type LinkStateProps = {
  user: User | null;
};

const mapStateToProps = (state: AppState): LinkStateProps => {
  return {
    user: state.userState.user
  };
};

export default connect(mapStateToProps)(PrivateRouter);
