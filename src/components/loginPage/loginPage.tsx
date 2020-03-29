import React from "react";
import { Form, Container, Button } from "react-bootstrap";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../types/actions/appActions";
import { UserLoginForm } from "../../types/user/userLogin";
import { userLogin } from "../../store/user/userThunks";
import { bindActionCreators } from "redux";
import { useInjection } from "../../ioc.react";
import { IUserService } from "../../services/userService/IUserService";
import { USER_SERVICE_NAME } from "../../constants";
import * as yup from "yup";
import { Formik } from "formik";
import { connect } from "react-redux";

const validationSchema: yup.ObjectSchema = yup.object({
  userName: yup.string().required(),
  password: yup.string().required()
});

const loginFormInitialValues: UserLoginForm = {
  userName: "",
  password: ""
};

type Props = LinkDispatchProps;

const LoginPage: React.FC<Props> = ({ userLogin }) => {
  const userService: IUserService = useInjection<IUserService>(
    USER_SERVICE_NAME
  );

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
        errors
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
          </Form>
        </Container>
      )}
    </Formik>
  );
};

type LinkDispatchProps = {
  userLogin: (loginForm: UserLoginForm, userService: IUserService) => void;
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => {
  return {
    userLogin: bindActionCreators(userLogin, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(LoginPage);
