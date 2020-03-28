import React from "react";
import { Switch, Route } from "react-router";
import { LOGIN_PAGE_URL } from "../constants";
import LoginPage from "../components/loginPage/loginPage";

const publicRoute: React.ReactElement = (
  <Switch>
    <Route exactPath={LOGIN_PAGE_URL} component={LoginPage} />
  </Switch>
);

const PublicRouter: React.FC = () => {
  return publicRoute;
};

export default PublicRouter;
