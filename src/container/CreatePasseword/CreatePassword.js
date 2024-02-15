import React, { Fragment, useState } from "react";
import { Container, Col, Row, InputGroup, Form } from "react-bootstrap";
import { Button, Loader } from "../../components/elements";
import PasswordChecklist from "react-password-checklist";
import PasswordHideEyeIcon from "../../assets/images/password_hide.svg";
import PasswordEyeIcon from "../../assets/images/password.svg";
import { createCorporateUser } from "../../store/actions/Auth-Actions";
import jsLogo from "../../assets/images/js-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import "./CreatePassword.css";
const CreatePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useSelector((state) => state);

  const location = useLocation();

  // This condition split the token and get array index 1 and array index 0
  const tokenId =
    location.search !== "" ? location.search.split("=")[1].split("%")[0] : "";
  let getToken = localStorage.getItem("ForPasswordCreation");
  const [passwordDetails, setPasswordDetails] = useState({
    Password: "",
    ConfirmPassword: "",
    token: tokenId === "" ? getToken : tokenId,
  });
  console.log(passwordDetails, "passwordDetailspasswordDetails");
  console.log(passwordDetails, "passwordDetailspasswordDetails");
  const [isPasswordStrong, setPasswordStrong] = useState(false);
  const [errorBar, setErrorBar] = useState(false);
  const [password, setPassword] = useState("");
  const [remeberPassword, SetRememberPassword] = useState(false);
  const [showNewPasswordIcon, setShowNewPasswordIcon] = useState(false);
  const [showConfirmPasswordIcon, setConfirmShowPasswordIcon] = useState(false);

  const createPasswordHandler = () => {
    if (
      passwordDetails.Password === passwordDetails.ConfirmPassword &&
      passwordDetails.Password !== "" &&
      passwordDetails.ConfirmPassword !== ""
    ) {
      let data = {
        Token: { Token: passwordDetails.token },
        Password: passwordDetails.Password,
        ConfirmPassword: passwordDetails.ConfirmPassword,
      };
      dispatch(createCorporateUser(navigate, data));
    } else {
      alert("Password doesn't match or Empty");
    }
  };

  const encryptPassword = (password) => {
    let encryptedPassword = "";
    for (let i = 0; i < password.length; i++) {
      const charCode = password.charCodeAt(i);
      encryptedPassword += String.fromCharCode(charCode + 1);
    }
    return encryptedPassword;
  };

  const showNewPassowrd = () => {
    setShowNewPasswordIcon(!showNewPasswordIcon);
  };

  const showConfirmPassowrd = () => {
    setConfirmShowPasswordIcon(!showConfirmPasswordIcon);
  };

  const passwordChangeHandler = (e) => {
    setErrorBar(false);
    let value = e.target.value;
    let name = e.target.name;
    var valueCheck = value.replace(/\s+/g, "");
    if (valueCheck === "") {
      console.log("packageDetailpackageDetailpackageDetailpackageDetail");
      setPassword("");
      setPasswordDetails({
        ...passwordDetails,
        [name]: "",
      });
      setErrorBar(true);
    } else if (valueCheck !== "") {
      console.log("packageDetailpackageDetailpackageDetailpackageDetail");

      if (remeberPassword === true) {
        setPasswordDetails({
          ...passwordDetails,
          [name]: value,
        });
        // setPassword(value);
        let newPassword = encryptPassword(value);
        localStorage.setItem("rememberPasswordValue", newPassword);
      } else {
        setPasswordDetails({
          ...passwordDetails,
          [name]: value,
        });
        // setPassword(value);
        setErrorBar(false);
      }
    } else if (value === "") {
      console.log("packageDetailpackageDetailpackageDetailpackageDetail");

      setErrorBar(false);
    }
  };

  return (
    <Fragment>
      <Col sm={12} lg={12} md={12} className="createpassword">
        <Col lg={12} md={12} sm={12} className="js-logo-image">
          <img src={jsLogo} alt="Js-logo" width="150px" />
        </Col>
        <Container>
          <Row className="">
            <Col sm={12} md={12} lg={12} className="Createpassword-container">
              <Row>
                <Col sm={5} md={5} lg={5} className="center-div flex-column">
                  <Row>
                    <Col sm={12} md={12} lg={12}>
                      <span className="Heading-js">JS Create Password</span>
                    </Col>
                    <Col sm={12} md={12} lg={12} className="mt-3">
                      <InputGroup className="mb-3">
                        <InputGroup.Text
                          id="basic-addon1"
                          className="Icon-Field-class"
                        >
                          <i className="icon-lock"></i>
                        </InputGroup.Text>
                        <Form.Control
                          name="Password"
                          className={
                            showNewPasswordIcon
                              ? "form-comtrol-textfield-password-Show"
                              : "form-comtrol-textfield-password"
                          }
                          value={passwordDetails.Password || ""}
                          onChange={passwordChangeHandler}
                          placeholder="Password"
                          aria-label="Username"
                          iconClassName="IconStyle"
                          aria-describedby="basic-addon1"
                        />
                        <span
                          className="passwordIcon"
                          onClick={showNewPassowrd}
                        >
                          {showNewPasswordIcon ? (
                            <img src={PasswordHideEyeIcon} alt="Icon" />
                          ) : (
                            <img src={PasswordEyeIcon} alt="Icon" />
                          )}
                        </span>
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
                          name="ConfirmPassword"
                          className={
                            showConfirmPasswordIcon
                              ? "form-comtrol-textfield-password-Show"
                              : "form-comtrol-textfield-password"
                          }
                          placeholder="Confirm Password"
                          value={passwordDetails.ConfirmPassword || ""}
                          onChange={passwordChangeHandler}
                          autoComplete="false"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                        <span
                          className="passwordIcon"
                          onClick={showConfirmPassowrd}
                        >
                          {showConfirmPasswordIcon ? (
                            <img src={PasswordHideEyeIcon} alt="Icon" />
                          ) : (
                            <img src={PasswordEyeIcon} alt="Icon" />
                          )}
                        </span>
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
                      //   className={styles["PasswordCheckListstyle"]}
                    >
                      <p className="ConfirmPassword_heading">
                        Password must have
                      </p>
                      <PasswordChecklist
                        rules={["minLength", "specialChar", "letter", "match"]}
                        minLength={8}
                        className={"passwordTextHandler"}
                        value={passwordDetails.Password}
                        valueAgain={passwordDetails.ConfirmPassword}
                        autoComplete="false"
                        onChange={(isValid) => {
                          setPasswordStrong(isValid);
                        }}
                        // invalidColor="#ff0000"
                        // validColor="#6172D6"
                        iconSize={"14px"}
                        messages={{
                          minLength: "Password has atleast 8 characters",
                          specialChar: "Password has special characters",
                          letter: "Password has a letter",
                          match: "Passwords match",
                        }}
                      />
                    </Col>

                    <Col
                      sm={12}
                      md={12}
                      lg={12}
                      className="signIn-Signup-btn-col mt-3"
                    >
                      <Button
                        text="Create Password"
                        onClick={createPasswordHandler}
                        className="login-btn"
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

export default CreatePassword;
