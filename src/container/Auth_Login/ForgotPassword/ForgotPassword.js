import React, { Fragment, useEffect, useState } from "react";
import { Container, Col, Row, InputGroup, Form } from "react-bootstrap";
import { Button } from "../../../components/elements";
import jsLogo from "../../../assets/images/js-logo.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendEmailResetPasswordApi } from "../../../store/actions/Auth-Actions";
import "./ForgotPassword.css";
const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState({
    open: false,
    message: "",
  });

  const [forgotTextField, setForgotTextField] = useState({
    email: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
  });

  const emailVerifyHandler = () => {
    let verifyEmail = {
      Email: forgotTextField.email.value,
    };
    dispatch(sendEmailResetPasswordApi(navigate, verifyEmail));
  };

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

  return (
    <Fragment>
      <Col sm={12} lg={12} md={12} className="Password-Forgot">
        <Col lg={12} md={12} sm={12} className="js-logo-image">
          <img src={jsLogo} width="150px" />
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
                      <InputGroup className="mb-3">
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
                    <Col
                      sm={12}
                      md={12}
                      lg={12}
                      className="signIn-Signup-btn-col"
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
    </Fragment>
  );
};

export default ForgotPassword;
