import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Dropdown,
  InputGroup,
  Form,
} from "react-bootstrap";
import { Button, Modal, TextField } from "../../../components/elements";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import RequestModal from "../../../container/RequestModal/RequestModal";
import { signOut } from "../../../store/actions/Auth-Actions";
import PasswordChecklist from "react-password-checklist";
import PasswordHideEyeIcon from "../../../assets/images/password_hide.svg";
import PasswordEyeIcon from "../../../assets/images/password.svg";
import Calculator from "../../../container/Calculator/Calculator";
import { Checkbox, Switch } from "antd";
import {
  ListUl,
  Gear,
  QuestionCircle,
  BoxArrowRight,
} from "react-bootstrap-icons";
import "./Header.css";
import JohnCater from "../../../assets/images/profile3.png";
import JsLogo from "../../../assets/images/js-logo.png";

const Header = ({ show, setShow }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [passwordDetails, setPasswordDetails] = useState({
    Password: "",
    ConfirmNewPassword: "",
  });
  const [errorBar, setErrorBar] = useState(false);
  const [password, setPassword] = useState("");
  const [remeberPassword, SetRememberPassword] = useState(false);

  const [showPasswordIcon, setShowPasswordIcon] = useState(false);
  const [showConfirmNewPasswordIcon, setShowConfirmNewPasswordIcon] =
    useState(false);
  const [isPasswordStrong, setPasswordStrong] = useState(false);

  //when Clicked on calculater Button One button add Upload
  const [showuploadbtn, setShowuploadbtn] = useState(false);

  // Modal for request quote modal
  const [requestQuoteModal, setRequestQuoteModal] = useState(false);

  // for show modal state
  const [showModal, setShowModal] = useState(false);

  //for user setting
  const [userSetting, setUserSetting] = useState(true);

  //for user passcode
  const [userPasscode, setUserPasscode] = useState(false);

  // for change password field state
  const [changePassField, setChangePassField] = useState(false);

  const showNewPassowrd = () => {
    setShowPasswordIcon(!showPasswordIcon);
  };

  const showConfirmPassowrd = () => {
    setShowConfirmNewPasswordIcon(!showConfirmNewPasswordIcon);
  };

  //for open request quote modal
  const openRequestModal = async () => {
    setRequestQuoteModal(true);
  };

  //for open setting show modal
  const openSettingModalHandler = async () => {
    setShowModal(true);
  };

  // for open usersetting
  const openUserSetting = async () => {
    setUserSetting(true);
    setUserPasscode(false);
  };

  //for open passcode
  const openPasscodeSetting = async () => {
    setUserPasscode(true);
    setUserSetting(false);
  };

  // for open calculator
  const gotoCalculator = () => {
    navigate("/Js/calculator");
    setShowuploadbtn(true);
  };

  //Route to client Main page and make the condition false for upload rate button
  const handleLogoClick = () => {
    setShowuploadbtn(false);
  };

  const encryptPassword = (password) => {
    let encryptedPassword = "";
    for (let i = 0; i < password.length; i++) {
      const charCode = password.charCodeAt(i);
      encryptedPassword += String.fromCharCode(charCode + 1);
    }
    return encryptedPassword;
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
    <>
      <Container fluid className="container-header">
        <Navbar collapseOnSelect expand="lg">
          <Container fluid>
            <Navbar.Brand to="Home" as={Link}>
              <img
                src={JsLogo}
                className="JsBankLogo"
                onClick={handleLogoClick}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="nav-rfq-calculator ms-auto">
                <Nav.Link>
                  {showuploadbtn ? (
                    <>
                      <Button
                        text="Upload Rates"
                        className="UploadRate-button"
                      />
                    </>
                  ) : (
                    <>
                      <Button
                        text="RFQ"
                        onClick={openRequestModal}
                        icon={
                          <>
                            <i className="icon-list rfq-btn-list-icon" />
                          </>
                        }
                        className="rfq-button"
                      />
                    </>
                  )}
                </Nav.Link>
                <Nav.Link>
                  <Button
                    text="Calculators"
                    className="caluclator-button"
                    onClick={gotoCalculator}
                  />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>

            <Dropdown className="profilebtn-dropdown">
              <Dropdown.Toggle className="dropdown-toggle">
                <img src={JohnCater} width={44} className="image-john" />

                <p className="user-name">Michael Hawk</p>
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown_menu">
                <Dropdown.Item>
                  <Nav.Link onClick={openSettingModalHandler}>
                    <i className="icon-settings setting-icon"></i>
                    <label className="dropdown-select-labels">Setting</label>
                  </Nav.Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <i className="icon-help-circle setting-icon"></i>
                  <label className="dropdown-select-labels">
                    Help & Support
                  </label>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Nav.Link>
                    <i className="icon-logout setting-icon"></i>
                    <label
                      className="dropdown-select-labels"
                      onClick={() => dispatch(signOut(navigate))}
                    >
                      Logout
                    </label>
                  </Nav.Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Navbar>
      </Container>

      <Modal
        show={showModal}
        setShow={setShowModal}
        size="lg"
        className="modaldialog modal-setting"
        modalHeaderClassName="header-Modal-setting"
        modalFooterClassName="modal-setting-footer"
        onHide={() => setShowModal(false)}
        ModalBody={
          <>
            {/* <Row>
              <Col lg={12} md={12} sm={12} className="top-button-setting-modal">
                <Button
                  text="User Settings"
                  className="modal-setting-btn"
                  onClick={openUserSetting}
                />
                <Button
                  text="Passcode Settings"
                  className="modal-setting-passcode-btn"
                  onClick={openPasscodeSetting}
                />
              </Col>
            </Row> */}

            {userSetting ? (
              <>
                <Row className="border-line-passcode ">
                  <Col
                    lg={6}
                    md={6}
                    sm={12}
                    className="d-flex justify-content-start mt-5"
                  >
                    <p className="modal-setting-para">
                      Two Factor Authentication
                    </p>
                  </Col>
                  <Col
                    lg={6}
                    md={6}
                    sm={12}
                    className="d-flex justify-content-end mt-5"
                  >
                    <Switch />
                  </Col>
                </Row>

                <Row>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    className="modal-setting-checkbox-col mt-1"
                  >
                    <Checkbox />
                    <p className="modal-setting-para">Sound on every message</p>
                  </Col>
                </Row>

                <Row>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    className="modal-setting-checkbox-col mt-1"
                  >
                    <Checkbox />
                    <p className="modal-setting-para">
                      Email on new message while offline
                    </p>
                  </Col>
                </Row>

                <Row className="mt-2">
                  <Col lg={12} md={12} sm={12}>
                    <Button
                      text="Change password"
                      className="change-password-btn"
                      onClick={() => setChangePassField(!changePassField)}
                    />

                    {changePassField ? (
                      <>
                        <Row className="mt-3">
                          <Col lg={12} md={12} sm={12}>
                            <Row>
                              <Col lg={4} md={4} sm={12}>
                                <span className="change-password-label">
                                  Enter New Password *
                                </span>
                              </Col>
                              <Col lg={8} md={8} sm={12}>
                                <TextField
                                  name="Password"
                                  className={
                                    showPasswordIcon
                                      ? "form-comtrol-textfield-password-Show-eyeIcon"
                                      : "form-comtrol-textfield-password-eyeIcon"
                                  }
                                  value={passwordDetails.Password || ""}
                                  onChange={passwordChangeHandler}
                                  placeholder="Password"
                                  labelClass="d-none"
                                  aria-label="Username"
                                  iconClassName="IconStyle"
                                  aria-describedby="basic-addon1"
                                />
                                <span
                                  className="passwordIcon-newPass-setting"
                                  onClick={showNewPassowrd}
                                >
                                  {showPasswordIcon ? (
                                    <img src={PasswordHideEyeIcon} />
                                  ) : (
                                    <img src={PasswordEyeIcon} />
                                  )}
                                </span>
                              </Col>
                            </Row>

                            <Row className="mt-3">
                              <Col lg={4} md={4} sm={12}>
                                <span className="change-password-label">
                                  Confirm New Password *
                                </span>
                              </Col>
                              <Col lg={8} md={8} sm={12}>
                                <TextField
                                  name="ConfirmNewPassword"
                                  value={
                                    passwordDetails.ConfirmNewPassword || ""
                                  }
                                  onChange={passwordChangeHandler}
                                  className={
                                    showConfirmNewPasswordIcon
                                      ? "form-comtrol-textfield-password-Show-eyeIcon"
                                      : "form-comtrol-textfield-password-eyeIcon"
                                  }
                                  placeholder="New Password"
                                  labelClass="d-none"
                                  aria-label="Username"
                                  iconClassName="IconStyle"
                                  aria-describedby="basic-addon1"
                                />
                                <span
                                  className="passwordIcon-setting"
                                  onClick={showConfirmPassowrd}
                                >
                                  {showConfirmNewPasswordIcon ? (
                                    <img src={PasswordHideEyeIcon} />
                                  ) : (
                                    <img src={PasswordEyeIcon} />
                                  )}
                                </span>
                              </Col>
                            </Row>
                          </Col>
                        </Row>

                        <Col sm={12} md={12} lg={12} className="mt-2">
                          <p className="ConfirmPassword_heading">
                            Password must have
                          </p>
                          <PasswordChecklist
                            rules={[
                              "minLength",
                              "specialChar",
                              "letter",
                              "match",
                            ]}
                            minLength={8}
                            className={"passwordTextHandler-setting"}
                            value={passwordDetails.Password}
                            valueAgain={passwordDetails.ConfirmNewPassword}
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
                      </>
                    ) : null}
                  </Col>
                </Row>
              </>
            ) : userPasscode ? (
              <>
                {/* <Row className="border-line-passcode">
                  <Col
                    lg={6}
                    md={6}
                    sm={6}
                    className="d-flex justify-content-start mt-5"
                  >
                    <p>Two Factor Authentication</p>
                  </Col>
                  <Col
                    lg={6}
                    md={6}
                    sm={6}
                    className="d-flex justify-content-end mt-5"
                  >
                    <Switch />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col lg={12} md={12} sm={12}>
                    <Button
                      text="Change password"
                      className="change-password-btn"
                    />
                  </Col>
                </Row> */}
              </>
            ) : null}
          </>
        }
        ModalFooter={
          <>
            {userSetting ? (
              <>
                <Row>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    className="d-flex justify-content-center"
                  >
                    <Button text="Save" className="modal-footer-save-btn" />
                  </Col>
                </Row>
              </>
            ) : userPasscode ? (
              <>
                <Row>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    className="d-flex justify-content-center"
                  >
                    <Button text="Save" className="modal-footer-save-btn" />
                  </Col>
                </Row>
              </>
            ) : null}
          </>
        }
      />

      {requestQuoteModal ? (
        <RequestModal
          modalRequest={requestQuoteModal}
          setModalRequest={setRequestQuoteModal}
        />
      ) : null}
    </>
  );
};

export default Header;
