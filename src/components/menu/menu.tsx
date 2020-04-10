import React from "react";
import { Navbar, Form, Button, Nav, Image } from "react-bootstrap";
import {
  HOME_PAGE_URL,
  LOGIN_PAGE_URL,
  USER_DETAILS_URL
} from "../../constants";
import { User } from "../../types/user/user";
import { AppState } from "../../store/store";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../types/actions/appActions";
import { bindActionCreators } from "redux";
import { userLogout } from "../../thunks/userThunks";
import users from "../../stubs/users.json";
import { Product } from "../../types/products/Product";

type PushType = typeof push;

const loginLogoutButton = (
  user: User | null,
  push: PushType,
  userLogout: () => void
): React.ReactElement => {
  if (user) {
    return (
      <Button
        onClick={userLogout}
        variant="outline-light"
        className="text-center"
      >
        Logout
      </Button>
    );
  }

  return (
    <Button
      onClick={() => push(LOGIN_PAGE_URL)}
      variant="outline-light"
      className="text-center"
    >
      Login
    </Button>
  );
};

const loginLogoutElement = (
  user: User | null,
  push: PushType,
  userLogout: () => void
): React.ReactElement => (
  <Form className="ml-auto" inline>
    {loginLogoutButton(user, push, userLogout)}
  </Form>
);

const privateNavBar = (
  user: User | null,
  push: PushType,
  userLogout: () => void
): React.ReactElement | null => {
  if (user) {
    return (
      <Nav className="ml-auto">
        <Button
          onClick={() => push(USER_DETAILS_URL)}
          className="mr-3 border rounded p-auto"
          variant="outline-light"
        >
          <Image
            src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG17.png"
            height="25"
            width="25"
          />
        </Button>
        {loginLogoutElement(user, push, userLogout)}
      </Nav>
    );
  }

  return loginLogoutElement(user, push, userLogout);
};

type Props = LinkStateProps & LinkDispatchProps & NavigationProps;

type NavigationProps = {
  push: PushType;
};

const Menu: React.FC<Props> = ({ user, push, userLogout }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Nav.Link onClick={() => push(HOME_PAGE_URL)} className="text-light">
        Home Page
      </Nav.Link>
      {privateNavBar(user, push, userLogout)}
    </Navbar>
  );
};

type LinkStateProps = {
  user: User | null;
};

const mapStateToProps = (state: AppState): LinkStateProps => {
  return {
    user: state.userState.user
  };
};

type LinkDispatchProps = {
  userLogout: () => void;
  push: PushType;
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => {
  return {
    userLogout: bindActionCreators(userLogout, dispatch),
    push: bindActionCreators(push, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
