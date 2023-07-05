import { useState } from "react";
import { Container, Row, Col, Nav, Dropdown } from "react-bootstrap";
import { Button, Modal } from "../../../components/elements";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import RequestModal from "../../../container/RequestModal/RequestModal";
import { signOut } from "../../../store/actions/Auth-Actions";
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
  //for open another modal

  const openRfqHandler = () => {};

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
                      <Button text="Upload Rates" className="rfq-button" />
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
                    text="Calculator"
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
            <Row>
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
            </Row>

            {userSetting ? (
              <>
                <Row>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    className="modal-setting-checkbox-col mt-5"
                  >
                    <Checkbox />
                    <p className="modal-setting-para">Chat Panel Overlap</p>
                  </Col>
                </Row>

                <Row>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    className="modal-setting-checkbox-col mt-2"
                  >
                    <Checkbox />
                    <p className="modal-setting-para">
                      Sound on every personal message
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    className="modal-setting-checkbox-col mt-2"
                  >
                    <Checkbox />
                    <p className="modal-setting-para">
                      Sound on every personal message
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    className="modal-setting-checkbox-col mt-2"
                  >
                    <Checkbox />
                    <p className="modal-setting-para">
                      Sound on every group message
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    className="modal-setting-checkbox-col mt-2"
                  >
                    <Checkbox />
                    <p className="modal-setting-para">
                      Sound on chat room message
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    className="modal-setting-checkbox-col mt-2"
                  >
                    <Checkbox />
                    <p className="modal-setting-para">
                      Email on new personal message while offline
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    className="modal-setting-checkbox-col mt-2"
                  >
                    <Checkbox />
                    <p className="modal-setting-para">
                      Email on new group message while offline
                    </p>
                  </Col>
                </Row>
              </>
            ) : userPasscode ? (
              <>
                <Row className="border-line-passcode">
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
                </Row>
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
