import React from "react";
import PrivateRouter from "./privateRouter";
import { Route, Switch } from "react-router";
import {
  LOGIN_PAGE_URL,
  HOME_PAGE_URL,
  USER_DETAILS_URL,
  CATEGORY_LINK_PREFIX
} from "../constants";
import LoginPage from "../components/loginPage/loginPage";
import HomePage from "../components/homePage/homePage";
import Cart from "../components/cart/cart";

const AppRouter: React.FC = () => {
  return (
    <Switch>
      <Route exact path={LOGIN_PAGE_URL} component={LoginPage} />
      <Route exact path={HOME_PAGE_URL} component={HomePage} />
      <Route
        exact
        path={HOME_PAGE_URL + CATEGORY_LINK_PREFIX + ":id"}
        component={HomePage}
      />
      <PrivateRouter exact path={USER_DETAILS_URL} component={Cart} />
    </Switch>
  );
};

export default AppRouter;
