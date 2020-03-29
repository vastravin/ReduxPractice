import React from "react";
import { connect } from "react-redux";
import { User } from "../types/user/user";
import { AppState } from "../store/store";
import { Redirect, Route } from "react-router";
import { LOGIN_PAGE_URL } from "../constants";

type Props = LinkStateProps & ComponentProps;

type ComponentProps = {
  component: React.FC;
  user: User | null;

  //rest parameters
  [x: string]: any;
};

const PrivateRouter: React.FC<Props> = ({
  component: Component,
  user,
  ...rest
}) => {
  const render = (): React.ReactElement => {
    return user ? <Component /> : <Redirect to={LOGIN_PAGE_URL} />;
  };

  return <Route {...rest} render={render} />;
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
