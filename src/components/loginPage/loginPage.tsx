import React, { useEffect, useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../types/actions/appActions";
import { UserLoginForm } from "../../types/user/userLogin";
import { userLogin } from "../../thunks/userThunks";
import { bindActionCreators } from "redux";
import { useInjection } from "../../ioc.react";
import { IUserService } from "../../services/userService/IUserService";
import { USER_SERVICE_NAME } from "../../constants";
import * as yup from "yup";
import { Formik } from "formik";
import { connect } from "react-redux";
import { User } from "../../types/user/user";
import { AppState } from "../../store/store";
import { clearRouteMemoryAction } from "../../store/routerMemory/routerMemoryActions";
import { RouterMemoryState } from "../../store/routerMemory/routerMemoryReducer";

const validationSchema: yup.ObjectSchema = yup.object({
  userName: yup.string().required(),
  password: yup.string().required(),
});

const loginFormInitialValues: UserLoginForm = {
  userName: "",
  password: "",
};

type Props = LinkDispatchProps & LinkStateProps;

const useUserService = (): [IUserService, (serviceName: string) => void] => {
  const [serviceName, setServiceName] = useState<string>(USER_SERVICE_NAME);
  const userService: IUserService = useInjection<IUserService>(serviceName);

  const setUserService = (serviceName: string): void => {
    if (serviceName === USER_SERVICE_NAME) {
      setServiceName(serviceName);
      return;
    }
    setServiceName("another");
  };

  return [userService, setUserService];
};

const LoginPage: React.FC<Props> = ({
  userLogin,
  clearMemorizedRoute,
  routerMemory,
}) => {
  // const userService: IUserService = useInjection<IUserService>(
  //   USER_SERVICE_NAME
  // );
  const [userService, setUserService] = useUserService();
  const [x, setX] = useState<boolean>(false);

  const serviceHelper = () => {
    if (x) {
      setUserService(USER_SERVICE_NAME);
      setX(false);

      return;
    }

    setUserService("another");
    setX(true);
  };

  useEffect(() => {
    return () => {
      if (routerMemory.memorizedPath || routerMemory.memorizedMethod) {
        clearMemorizedRoute();
      }
    };
  }, [routerMemory]);

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={(values: UserLoginForm): void => userLogin(values, userService)}
      initialValues={loginFormInitialValues}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Container fluid="sm" className=" bg-dark mt-5 p-5 ">
          <Form
            className="d-flex flex-column align-items-center"
            onSubmit={handleSubmit}
          >
            <Form.Group className="w-75">
              <Form.Label className="text-light">Username</Form.Label>
              <Form.Control
                type="text"
                name="userName"
                value={values.userName}
                onChange={handleChange}
                placeholder="Enter username"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="w-75">
              <Form.Label className="text-light">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Enter password"
              ></Form.Control>
            </Form.Group>
            <Button className="w-75 mt-5" type="submit">
              Login
            </Button>
            <Button type="button" onClick={serviceHelper}>
              SERVICE CHANGER
            </Button>
          </Form>
        </Container>
      )}
    </Formik>
  );
};

type LinkStateProps = {
  user: User | null;
  routerMemory: RouterMemoryState;
};

type LinkDispatchProps = {
  userLogin: (loginForm: UserLoginForm, userService: IUserService) => void;
  clearMemorizedRoute: () => void;
};

const mapStateToProps = (state: AppState): LinkStateProps => {
  return {
    user: state.userState.user,
    routerMemory: state.routerMemory,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => {
  return {
    userLogin: bindActionCreators(userLogin, dispatch),
    clearMemorizedRoute: bindActionCreators(clearRouteMemoryAction, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
