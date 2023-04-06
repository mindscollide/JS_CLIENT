import { useState } from "react";
import { Container, Row, Col, Nav, Dropdown } from "react-bootstrap";
import { Button, Modal } from "../../../components/elements";
import Navbar from "react-bootstrap/Navbar";
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

const Header = () => {
  // for show modal state
  const [show, setShow] = useState(false);

  //for user setting
  const [userSetting, setUserSetting] = useState(true);

  //for user passcode
  const [userPasscode, setUserPasscode] = useState(false);

  //for open setting show modal
  const openSettingModalHandler = async () => {
    setShow(true);
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

  return (
    <>
      <Container fluid className="container-header">
        <Navbar collapseOnSelect expand="lg">
          <Container fluid>
            <Navbar.Brand>
              <img src={JsLogo} width={220} height={50} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="nav-rfq-calculator ms-auto">
                <Nav.Link>
                  {" "}
                  <Button
                    text="RFQ"
                    icon={
                      <>
                        <i className="icon-list" />
                      </>
                    }
                    className="rfq-button"
                  />
                </Nav.Link>
                <Nav.Link>
                  <Button text="Calculator" className="caluclator-button" />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>

            <Dropdown className="profilebtn-dropdown">
              <Dropdown.Toggle className="dropdown-toggle">
                <img src={JohnCater} className="image-john" />

                <p className="user-name">Michael Hawk</p>
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown_menu">
                <Dropdown.Item>
                  <Nav.Link onClick={openSettingModalHandler}>
                    <Gear />
                    <label className="dropdown-select-labels">Setting</label>
                  </Nav.Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <QuestionCircle />
                  <label className="dropdown-select-labels">
                    Help & Support
                  </label>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Nav.Link>
                    <BoxArrowRight />
                    <label className="dropdown-select-labels">Logout</label>
                  </Nav.Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Navbar>
      </Container>

      <Modal
        show={show}
        setShow={setShow}
        size="lg"
        className="modaldialog modal-setting"
        modalHeaderClassName="header-Modal-setting"
        modalFooterClassName="modal-setting-footer"
        onHide={() => setShow(false)}
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
    </>
  );
};

export default Header;
