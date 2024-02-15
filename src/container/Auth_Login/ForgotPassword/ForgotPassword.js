import React, { Fragment, useState } from "react";
import { Container, Col, Row, InputGroup, Form } from "react-bootstrap";
import { Button, Loader } from "../../../components/elements";
import jsLogo from "../../../assets/images/js-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "../../../assets/common/functions/emailValidation";
import { sendEmailResetPasswordApi } from "../../../store/actions/Auth-Actions";
import "./ForgotPassword.css";
const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useSelector((state) => state);

  const [isValidEmail, setIsValidEmail] = useState(false);
  //state for error Message
  const [errorShow, setErrorShow] = useState(false);

  // state for email textfield
  const [forgotTextField, setForgotTextField] = useState({
    email: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
  });

  // Email Onchange handler
  const validationHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "email" && value !== "") {
      console.log("valuevalueemailvaluevalueemail", value);
      if (value !== "") {
        setForgotTextField({
          ...forgotTextField,
          email: {
            value: value.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "email" && value === "") {
      setForgotTextField({
        ...forgotTextField,
        email: {
          value: "",
          errorMessage: "",
          errorStatus: true,
        },
      });
    }
  };

  // for Verify email handler
  const emailVerifyHandler = (e) => {
    e.preventDefault();
    if (forgotTextField.email.value !== "") {
      if (validateEmail(forgotTextField.email.value)) {
        let verifyEmail = {
          Email: forgotTextField.email.value,
        };
        setErrorShow(false);
        setIsValidEmail(true);
        dispatch(sendEmailResetPasswordApi(navigate, verifyEmail));
      } else if (validateEmail(forgotTextField.email.value) === false) {
        setErrorShow(true);
        setIsValidEmail(false);
        setForgotTextField({
          ...forgotTextField,
          email: {
            value: forgotTextField.email.value,
            errorMessage: "Email Should be In Valid Format",
            errorStatus: true,
          },
        });
      }
    } else {
      setErrorShow(true);
      setIsValidEmail(false);
      setForgotTextField({
        ...forgotTextField,
        email: {
          value: forgotTextField.email.value,
          errorMessage: "Email is requried",
          errorStatus: true,
        },
      });
    }
  };

  return (
    <Fragment>
      <Col sm={12} lg={12} md={12} className="Password-Forgot">
        <Col lg={12} md={12} sm={12} className="js-logo-image">
          <img src={jsLogo} alt="JS-Logo" width="150px" />
        </Col>
        <Container>
          <Row className="">
            <Col sm={12} md={12} lg={12} className="forgot-password-container">
              <Row>
                <Col
                  sm={5}
                  md={5}
                  lg={5}
                  className="forgot-center-div flex-column"
                >
                  <Row>
                    <Col sm={12} md={12} lg={12}>
                      <span className="Forgot-Heading-js">
                        JS Forgot Password
                      </span>
                    </Col>
                    <Col sm={12} md={12} lg={12} className="mt-3">
                      <InputGroup>
                        <InputGroup.Text
                          id="basic-addon1"
                          className="Forgot-field-class"
                        >
                          <i className="icon-user"></i>
                        </InputGroup.Text>
                        <Form.Control
                          name="email"
                          value={forgotTextField.email.value}
                          onChange={validationHandler}
                          className="form-comtrol-Forgot-textfield"
                          placeholder="Email ID"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </InputGroup>
                    </Col>
                    <Row>
                      {/* <Col className="d-flex justify-content-start">
                        <p
                          className={
                            errorShow && forgotTextField.email.value === ""
                              ? "bankErrorMessage"
                              : "bankErrorMessage_hidden"
                          }
                        >
                          Email is required
                        </p>
                      </Col> */}

                      <Col className="d-flex justify-content-start">
                        {(!isValidEmail &&
                          forgotTextField.email.value !== "" && (
                            <p
                              className={
                                errorShow &&
                                forgotTextField.email.errorMessage !== ""
                                  ? "bankErrorMessage"
                                  : "bankErrorMessage_hidden"
                              }
                            >
                              {forgotTextField.email.errorMessage}
                            </p>
                          )) || (
                          <p
                            className={
                              errorShow && forgotTextField.email.value === ""
                                ? "bankErrorMessage"
                                : "bankErrorMessage_hidden"
                            }
                          >
                            {forgotTextField.email.errorMessage}
                          </p>
                        )}
                      </Col>
                    </Row>
                    <Col
                      sm={12}
                      md={12}
                      lg={12}
                      className="signIn-Signup-btn-col mt-2"
                    >
                      <Button
                        text="Verify Email"
                        className="Forgot-btn"
                        onClick={emailVerifyHandler}
                      />
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

export default ForgotPassword;
