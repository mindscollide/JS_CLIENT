import React, { Fragment, useEffect, useState } from "react";
import { Container, Col, Row, InputGroup, Form } from "react-bootstrap";
import { Button, TextField } from "../../../components/elements";
import jsLogo from "../../../assets/images/js-logo.png";
import "./Signup-Request.css";
const SignUpRequest = () => {
  return (
    <Fragment>
      <Col sm={12} lg={12} md={12} className="sign-up-request">
        <Col lg={12} md={12} sm={12}>
          <img src={jsLogo} width="150px" />
        </Col>
        <Container>
          <Row className="">
            <Col sm={12} md={12} lg={12} className="sign-up-request-container">
              <Row>
                <Col sm={5} md={5} lg={5} className="sign-up-request-div flex-column">
                  <Row>
                    <Col sm={12} md={12} lg={12}>
                      <span className="Heading-js">JS Login Portal</span>
                      <span className="signup-request-heading">Signup Request</span>
                    </Col>
                    <Col sm={12} md={12} lg={12} className="mt-2">
                      <InputGroup className="mb-3">
                        <InputGroup.Text
                          id="basic-addon1"
                          className="Icon-Field-class"
                        >
                          <i className="icon-user"></i>
                        </InputGroup.Text>
                        <Form.Control
                          className="sign-up-request-field"
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
                          className="sign-up-request-field"
                          placeholder="Password"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </InputGroup>
                      {/* <TextField
                        placeholder="User Password"
                        className="Text-field"
                      /> */}
                    </Col>
                    <Col
                      sm={12}
                      md={12}
                      lg={12}
                      className="signIn-Proceed-btn-col"
                    >
                      <Button text="Go Back" className="goBack-btn" />
                      <Button text="Proceed" className="Proceed-btn" />
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

export default SignUpRequest;
