import React, { Fragment, useState } from "react";
import { Container, Col, Row, InputGroup, Form } from "react-bootstrap";
import { Button, Loader } from "../../../components/elements";
import jsLogo from "../../../assets/images/js-logo.png";
import { LoginUser } from "../../../store/actions/Auth-Actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
const SignIn = () => {
  const { auth } = useSelector((state) => state);
  const [showNewPasswordIcon, setShowNewPasswordIcon] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState({
    open: false,
    message: "",
  });

  // state for client Login
  const [clientCredentials, setClientCredentials] = useState({
    UserName: "",
    Password: "",
    DeviceID: null,
    Device: null,
    fakePassword: "",
  });

  // credentials for email and password
  const setCredentialHandler = (e) => {
    if (e.target.name === "Password") {
      let numChars = e.target.value;
      let showText = "";
      for (let i = 0; i < numChars.length; i++) {
        showText += "•";
      }
      setClientCredentials({
        ...clientCredentials,
        [e.target.name]: e.target.value,
        ["fakePassword"]: showText,
      });
    } else {
      setClientCredentials({
        ...clientCredentials,
        [e.target.name]: e.target.value,
      });
    }
  };
  console.log("clientCredentials", clientCredentials);
  // handler for submit login
  const loginValidateHandler = (e) => {
    e.preventDefault();
    if (
      clientCredentials.UserName !== "" &&
      clientCredentials.Password !== ""
    ) {
      dispatch(LoginUser(clientCredentials, navigate));
    } else {
      setOpen({
        ...open,
        open: true,
        message: "Please Fill All Credentials Fields",
      });
    }
  };

  // navigate to Forgot password page
  const passwordForgot = () => {
    navigate("./forgotPassword");
  };

  return (
    <Fragment>
      <Col sm={12} lg={12} md={12} className="sign-in">
        <Col lg={12} md={12} sm={12} className="js-logo-image">
          <img src={jsLogo} width="150px" alt="jsLogo" />
        </Col>
        <Container>
          <Row className="">
            <Col sm={12} md={12} lg={12} className="login-container">
              <Row>
                <Col sm={5} md={5} lg={5} className="center-div flex-column">
                  <Row>
                    <Col sm={12} md={12} lg={12}>
                      <span className="Heading-js">JS Login Portal</span>
                    </Col>
                    <Col sm={12} md={12} lg={12} className="mt-3">
                      <InputGroup className="mb-3">
                        <InputGroup.Text
                          id="basic-addon1"
                          className="Icon-Field-class"
                        >
                          <i className="icon-user"></i>
                        </InputGroup.Text>
                        <Form.Control
                          name="UserName"
                          value={clientCredentials.UserName}
                          onChange={setCredentialHandler}
                          className="form-comtrol-textfield"
                          placeholder="Email ID"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </InputGroup>
                    </Col>
                    <Col sm={12} md={12} lg={12} className="mb-3">
                      <InputGroup>
                        <InputGroup.Text
                          id="basic-addon1"
                          className="Icon-Field-class"
                        >
                          <i className="icon-lock"></i>
                        </InputGroup.Text>
                        <Form.Control
                          name="Password"
                          onChange={setCredentialHandler}
                          className={
                            showNewPasswordIcon
                              ? "form-comtrol-textfield-password-Show"
                              : "form-comtrol-textfield-password"
                          }
                          placeholder="Password"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </InputGroup>
                    </Col>
                    <Col
                      lg={12}
                      md={12}
                      sm={12}
                      className="d-flex justify-content-center"
                    >
                      <p
                        className="forget-password-login"
                        onClick={passwordForgot}
                      >
                        Forgot Password?
                      </p>
                    </Col>

                    <Col
                      sm={12}
                      md={12}
                      lg={12}
                      className="signIn-Signup-btn-col"
                    >
                      <Button
                        text="Login"
                        className="login-btn"
                        onClick={loginValidateHandler}
                      />
                      <Button text="Signup" className="signup-btn" />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Col>
      {auth.Loading ? <Loader /> : null}
    </Fragment>
  );
};

export default SignIn;
