import React, { useState, useEffect } from "react";
import { Row, Col, Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import Chat from "../../../assets/images/Comment-Icon.png";
import {
  Gear,
  ChatLeft,
  People,
  Search,
  ArrowsAngleExpand,
  X,
  ChatDots,
  Send,
  Paperclip,
} from "react-bootstrap-icons";
import JohnCater from "../../../assets/images/profile3.png";
import { Button, TextField } from "../../../components/elements";
import Users from "../../../assets/images/Assignees-Icon.png";
import Broadcast from "../../../assets/images/6.png";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  //for chat open after click sidebar chat icon
  const [openChat, setOpenChat] = useState(false);

  //for chat open logged in user
  const [openLogIn, setOpenLogIn] = useState(false);

  //for open invite user panel state
  const [openInvite, setOpenInvite] = useState(false);

  //for another chat box open
  const [chatBoxOpen, setChatBoxOpen] = useState(false);

  return (
    <>
      <Row className={styles["sidebar-row"]}>
        <Col sm={11} className={""}></Col>
        <Col sm={1} className={styles["js-sidebar"]}>
          <Nav disabled={true} className={styles["new_sidebar"]}>
            <>
              {/* ChatIcon */}
              <Nav.Link disabled={false}>
                <span className={styles["sidebar-icons-color"]}>
                  <i
                    className="icon-chat2"
                    size={40}
                    onClick={() => setOpenChat(!openChat)}
                  ></i>
                </span>

                <label className={styles["sidebar-text"]}>Chat</label>
              </Nav.Link>

              {/* Logged In User */}
              <Nav.Link disabled={false}>
                {/* <img src={Users} onClick={() => setOpenLogIn(!openLogIn)} /> */}

                <span className={styles["sidebar-icons-color"]}>
                  <i
                    className="icon-group-chat"
                    size={40}
                    onClick={() => setOpenLogIn(!openLogIn)}
                  ></i>
                </span>
                <label className={styles["sidebar-text"]}>
                  Logged In Users
                </label>
              </Nav.Link>

              {/* Invite User */}
              <Nav.Link disabled={false}>
                <span className={styles["sidebar-icons-color"]}>
                  <i
                    className="icon-group-chat"
                    size={40}
                    onClick={() => setOpenInvite(!openInvite)}
                  ></i>
                </span>

                <label className={styles["sidebar-text"]}>Invite users</label>
              </Nav.Link>

              {/* Broadcast user */}
              <Nav.Link disabled={false}>
                {/* <img src={Broadcast} /> */}

                <span className={styles["sidebar-icons-color"]}>
                  <i className="icon-message"></i>
                </span>
                <label className={styles["sidebar-text"]}>
                  Broadcast message
                </label>
              </Nav.Link>

              {/* Setting User */}
              <Nav.Link disabled={true}>
                {/* <img src={Broadcast} /> */}
                <span className={styles["sidebar-icons-color"]}>
                  <i className="icon-settings"></i>
                </span>
                <label className={styles["sidebar-text"]}>Settings</label>
              </Nav.Link>

              {/* Broadcast message */}
              <Nav.Link disabled={true}></Nav.Link>
            </>
          </Nav>
        </Col>
      </Row>

      {openChat ? (
        <>
          <div className={styles["openChat-panel"]}>
            <Row className={styles["recent-chat-row-bottom"]}>
              <Col lg={8} md={8} sm={8} className={styles["label-col"]}>
                <label className={styles["recent-chat"]}>Recent Chat</label>
              </Col>
              <Col lg={4} md={4} sm={4} className={styles["top-icons"]}>
                <Search size={20} />
                <ArrowsAngleExpand size={18} />
                <X size={22} />
              </Col>
            </Row>

            {/* for chat images, text and time */}

            <div className={styles["chat-inside-scroll"]}>
              <Row>
                <Col lg={2} md={2} sm={2}>
                  <img src={JohnCater} className={styles["image-john"]} />
                </Col>
                <Col lg={7} md={7} sm={7}>
                  <label
                    className={styles["label-image-chat"]}
                    onClick={() => setChatBoxOpen(!chatBoxOpen)}
                  >
                    <strong>John Carter</strong> (Gul Ahmed)
                    <br />
                    Stock futures little changed...
                  </label>
                </Col>
                <Col lg={3} md={3} sm={3}>
                  <label className={styles["label-image-time"]}>
                    12:40:00 AM
                  </label>
                </Col>
              </Row>

              <Row>
                <Col lg={2} md={2} sm={2}>
                  <img src={JohnCater} className={styles["image-john"]} />
                </Col>
                <Col lg={7} md={7} sm={7}>
                  <label className={styles["label-image-chat"]}>
                    <strong>John Carter</strong> (Gul Ahmed)
                    <br />
                    Stock futures little changed...
                  </label>
                </Col>
                <Col lg={3} md={3} sm={3}>
                  <label className={styles["label-image-time"]}>
                    12:40:00 AM
                  </label>
                </Col>
              </Row>

              <Row>
                <Col lg={2} md={2} sm={2}>
                  <img src={JohnCater} className={styles["image-john"]} />
                </Col>
                <Col lg={7} md={7} sm={7}>
                  <label className={styles["label-image-chat"]}>
                    <strong>John Carter</strong> (Gul Ahmed)
                    <br />
                    Stock futures little changed...
                  </label>
                </Col>
                <Col lg={3} md={3} sm={3}>
                  <label className={styles["label-image-time"]}>
                    12:40:00 AM
                  </label>
                </Col>
              </Row>

              <Row>
                <Col lg={2} md={2} sm={2}>
                  <img src={JohnCater} className={styles["image-john"]} />
                </Col>
                <Col lg={7} md={7} sm={7}>
                  <label className={styles["label-image-chat"]}>
                    <strong>John Carter</strong> (Gul Ahmed)
                    <br />
                    Stock futures little changed...
                  </label>
                </Col>
                <Col lg={3} md={3} sm={3}>
                  <label className={styles["label-image-time"]}>
                    12:40:00 AM
                  </label>
                </Col>
              </Row>

              <Row>
                <Col lg={2} md={2} sm={2}>
                  <img src={JohnCater} className={styles["image-john"]} />
                </Col>
                <Col lg={7} md={7} sm={7}>
                  <label className={styles["label-image-chat"]}>
                    <strong>John Carter</strong> (Gul Ahmed)
                    <br />
                    Stock futures little changed...
                  </label>
                </Col>
                <Col lg={3} md={3} sm={3}>
                  <label className={styles["label-image-time"]}>
                    12:40:00 AM
                  </label>
                </Col>
              </Row>

              <Row>
                <Col lg={2} md={2} sm={2}>
                  <img src={JohnCater} className={styles["image-john"]} />
                </Col>
                <Col lg={7} md={7} sm={7}>
                  <label className={styles["label-image-chat"]}>
                    <strong>John Carter</strong> (Gul Ahmed)
                    <br />
                    Stock futures little changed...
                  </label>
                </Col>
                <Col lg={3} md={3} sm={3}>
                  <label className={styles["label-image-time"]}>
                    12:40:00 AM
                  </label>
                </Col>
              </Row>

              <Row>
                <Col lg={2} md={2} sm={2}>
                  <img src={JohnCater} className={styles["image-john"]} />
                </Col>
                <Col lg={7} md={7} sm={7}>
                  <label className={styles["label-image-chat"]}>
                    <strong>John Carter</strong> (Gul Ahmed)
                    <br />
                    Stock futures little changed...
                  </label>
                </Col>
                <Col lg={3} md={3} sm={3}>
                  <label className={styles["label-image-time"]}>
                    12:40:00 AM
                  </label>
                </Col>
              </Row>

              <Row>
                <Col lg={2} md={2} sm={2}>
                  <img src={JohnCater} className={styles["image-john"]} />
                </Col>
                <Col lg={7} md={7} sm={7}>
                  <label className={styles["label-image-chat"]}>
                    <strong>John Carter</strong> (Gul Ahmed)
                    <br />
                    Stock futures little changed...
                  </label>
                </Col>
                <Col lg={3} md={3} sm={3}>
                  <label className={styles["label-image-time"]}>
                    12:40:00 AM
                  </label>
                </Col>
              </Row>

              <Row>
                <Col lg={2} md={2} sm={2}>
                  <img src={JohnCater} className={styles["image-john"]} />
                </Col>
                <Col lg={7} md={7} sm={7}>
                  <label className={styles["label-image-chat"]}>
                    <strong>John Carter</strong> (Gul Ahmed)
                    <br />
                    Stock futures little changed...
                  </label>
                </Col>
                <Col lg={3} md={3} sm={3}>
                  <label className={styles["label-image-time"]}>
                    12:40:00 AM
                  </label>
                </Col>
              </Row>

              <Row>
                <Col lg={2} md={2} sm={2}>
                  <img src={JohnCater} className={styles["image-john"]} />
                </Col>
                <Col lg={7} md={7} sm={7}>
                  <label className={styles["label-image-chat"]}>
                    <strong>John Carter</strong> (Gul Ahmed)
                    <br />
                    Stock futures little changed...
                  </label>
                </Col>
                <Col lg={3} md={3} sm={3}>
                  <label className={styles["label-image-time"]}>
                    12:40:00 AM
                  </label>
                </Col>
              </Row>

              <Row>
                <Col lg={2} md={2} sm={2}>
                  <img src={JohnCater} className={styles["image-john"]} />
                </Col>
                <Col lg={7} md={7} sm={7}>
                  <label className={styles["label-image-chat"]}>
                    <strong>John Carter</strong> (Gul Ahmed)
                    <br />
                    Stock futures little changed...
                  </label>
                </Col>
                <Col lg={3} md={3} sm={3}>
                  <label className={styles["label-image-time"]}>
                    12:40:00 AM
                  </label>
                </Col>
              </Row>
            </div>
          </div>
        </>
      ) : openLogIn ? (
        <>
          <div className={styles["openChat-panel"]}>
            <Row className={styles["recent-chat-row-bottom"]}>
              <Col lg={8} md={8} sm={8} className={styles["label-col"]}>
                <label className={styles["recent-chat"]}>Logged In Users</label>
              </Col>
              <Col lg={4} md={4} sm={4} className={styles["top-icons"]}>
                <Search size={20} />
                <ArrowsAngleExpand size={18} />
                <X size={22} />
              </Col>
            </Row>

            {/* for login images, text and time */}
            <div className={styles["login-main-div"]}>
              <Row className={styles["login-row-bottom-line"]}>
                <Col lg={1} md={1} sm={1}>
                  <i className={styles["user-available"]}></i>
                </Col>
                <Col lg={4} md={4} sm={4}>
                  <label className={styles["user-login-label-heading"]}>
                    John Carter Gul Ahmed
                  </label>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  sm={3}
                  className="d-flex justify-content-start"
                >
                  <label className={styles["login-date-and-time"]}>
                    10-10-2022 01:00
                  </label>
                </Col>
                <Col lg={2} md={2} sm={2}>
                  <label className={styles["login-date-and-time"]}>
                    00:05:06
                  </label>
                </Col>
                <Col lg={2} md={2} sm={2}>
                  <Button
                    icon={<ChatDots />}
                    onClick={() => setChatBoxOpen(!chatBoxOpen)}
                    className={styles["chat-button-loggin"]}
                  />
                </Col>
              </Row>

              <Row className={styles["login-row-bottom-line"]}>
                <Col lg={1} md={1} sm={1}>
                  <i className={styles["user-available"]}></i>
                </Col>
                <Col lg={4} md={4} sm={4}>
                  <label className={styles["user-login-label-heading"]}>
                    John Carter Gul Ahmed
                  </label>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  sm={3}
                  className="d-flex justify-content-start"
                >
                  <label className={styles["login-date-and-time"]}>
                    10-10-2022 01:00
                  </label>
                </Col>
                <Col lg={2} md={2} sm={2}>
                  <label className={styles["login-date-and-time"]}>
                    00:05:06
                  </label>
                </Col>
                <Col lg={2} md={2} sm={2}>
                  <Button
                    icon={<ChatDots />}
                    className={styles["chat-button-loggin"]}
                  />
                </Col>
              </Row>

              <Row className={styles["login-row-bottom-line"]}>
                <Col lg={1} md={1} sm={1}>
                  <i className={styles["user-available"]}></i>
                </Col>
                <Col lg={4} md={4} sm={4}>
                  <label className={styles["user-login-label-heading"]}>
                    John Carter Gul Ahmed
                  </label>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  sm={3}
                  className="d-flex justify-content-start"
                >
                  <label className={styles["login-date-and-time"]}>
                    10-10-2022 01:00
                  </label>
                </Col>
                <Col lg={2} md={2} sm={2}>
                  <label className={styles["login-date-and-time"]}>
                    00:05:06
                  </label>
                </Col>
                <Col lg={2} md={2} sm={2}>
                  <Button
                    icon={<ChatDots />}
                    className={styles["chat-button-loggin"]}
                  />
                </Col>
              </Row>

              <Row className={styles["login-row-bottom-line"]}>
                <Col lg={1} md={1} sm={1}>
                  <i className={styles["user-available"]}></i>
                </Col>
                <Col lg={4} md={4} sm={4}>
                  <label className={styles["user-login-label-heading"]}>
                    John Carter Gul Ahmed
                  </label>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  sm={3}
                  className="d-flex justify-content-start"
                >
                  <label className={styles["login-date-and-time"]}>
                    10-10-2022 01:00
                  </label>
                </Col>
                <Col lg={2} md={2} sm={2}>
                  <label className={styles["login-date-and-time"]}>
                    00:05:06
                  </label>
                </Col>
                <Col lg={2} md={2} sm={2}>
                  <Button
                    icon={<ChatDots />}
                    className={styles["chat-button-loggin"]}
                  />
                </Col>
              </Row>

              <Row className={styles["login-row-bottom-line"]}>
                <Col lg={1} md={1} sm={1}>
                  <i className={styles["user-available"]}></i>
                </Col>
                <Col lg={4} md={4} sm={4}>
                  <label className={styles["user-login-label-heading"]}>
                    John Carter Gul Ahmed
                  </label>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  sm={3}
                  className="d-flex justify-content-start"
                >
                  <label className={styles["login-date-and-time"]}>
                    10-10-2022 01:00
                  </label>
                </Col>
                <Col lg={2} md={2} sm={2}>
                  <label className={styles["login-date-and-time"]}>
                    00:05:06
                  </label>
                </Col>
                <Col lg={2} md={2} sm={2}>
                  <Button
                    icon={<ChatDots />}
                    className={styles["chat-button-loggin"]}
                  />
                </Col>
              </Row>

              <Row className={styles["login-row-bottom-line"]}>
                <Col lg={1} md={1} sm={1}>
                  <i className={styles["user-available"]}></i>
                </Col>
                <Col lg={4} md={4} sm={4}>
                  <label className={styles["user-login-label-heading"]}>
                    John Carter Gul Ahmed
                  </label>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  sm={3}
                  className="d-flex justify-content-start"
                >
                  <label className={styles["login-date-and-time"]}>
                    10-10-2022 01:00
                  </label>
                </Col>
                <Col lg={2} md={2} sm={2}>
                  <label className={styles["login-date-and-time"]}>
                    00:05:06
                  </label>
                </Col>
                <Col lg={2} md={2} sm={2}>
                  <Button
                    icon={<ChatDots />}
                    className={styles["chat-button-loggin"]}
                  />
                </Col>
              </Row>

              <Row className={styles["login-row-bottom-line"]}>
                <Col lg={1} md={1} sm={1}>
                  <i className={styles["user-available"]}></i>
                </Col>
                <Col lg={4} md={4} sm={4}>
                  <label className={styles["user-login-label-heading"]}>
                    John Carter Gul Ahmed
                  </label>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  sm={3}
                  className="d-flex justify-content-start"
                >
                  <label className={styles["login-date-and-time"]}>
                    10-10-2022 01:00
                  </label>
                </Col>
                <Col lg={2} md={2} sm={2}>
                  <label className={styles["login-date-and-time"]}>
                    00:05:06
                  </label>
                </Col>
                <Col lg={2} md={2} sm={2}>
                  <Button
                    icon={<ChatDots />}
                    className={styles["chat-button-loggin"]}
                  />
                </Col>
              </Row>

              <Row className={styles["login-row-bottom-line"]}>
                <Col lg={1} md={1} sm={1}>
                  <i className={styles["user-available"]}></i>
                </Col>
                <Col lg={4} md={4} sm={4}>
                  <label className={styles["user-login-label-heading"]}>
                    John Carter Gul Ahmed
                  </label>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  sm={3}
                  className="d-flex justify-content-start"
                >
                  <label className={styles["login-date-and-time"]}>
                    10-10-2022 01:00
                  </label>
                </Col>
                <Col lg={2} md={2} sm={2}>
                  <label className={styles["login-date-and-time"]}>
                    00:05:06
                  </label>
                </Col>
                <Col lg={2} md={2} sm={2}>
                  <Button
                    icon={<ChatDots />}
                    className={styles["chat-button-loggin"]}
                  />
                </Col>
              </Row>
              <Row className={styles["login-row-bottom-line"]}>
                <Col lg={1} md={1} sm={1}>
                  <i className={styles["user-available"]}></i>
                </Col>
                <Col lg={4} md={4} sm={4}>
                  <label className={styles["user-login-label-heading"]}>
                    John Carter Gul Ahmed
                  </label>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  sm={3}
                  className="d-flex justify-content-start"
                >
                  <label className={styles["login-date-and-time"]}>
                    10-10-2022 01:00
                  </label>
                </Col>
                <Col lg={2} md={2} sm={2}>
                  <label className={styles["login-date-and-time"]}>
                    00:05:06
                  </label>
                </Col>
                <Col lg={2} md={2} sm={2}>
                  <Button
                    icon={<ChatDots />}
                    className={styles["chat-button-loggin"]}
                  />
                </Col>
              </Row>
              <Row className={styles["login-row-bottom-line"]}>
                <Col lg={1} md={1} sm={1}>
                  <i className={styles["user-available"]}></i>
                </Col>
                <Col lg={4} md={4} sm={4}>
                  <label className={styles["user-login-label-heading"]}>
                    John Carter Gul Ahmed
                  </label>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  sm={3}
                  className="d-flex justify-content-start"
                >
                  <label className={styles["login-date-and-time"]}>
                    10-10-2022 01:00
                  </label>
                </Col>
                <Col lg={2} md={2} sm={2}>
                  <label className={styles["login-date-and-time"]}>
                    00:05:06
                  </label>
                </Col>
                <Col lg={2} md={2} sm={2}>
                  <Button
                    icon={<ChatDots />}
                    className={styles["chat-button-loggin"]}
                  />
                </Col>
              </Row>
            </div>
          </div>
        </>
      ) : openInvite ? (
        <>
          <div className={styles["openChat-panel"]}>
            <Row className={styles["recent-chat-row-bottom"]}>
              <Col lg={10} md={10} sm={10} className={styles["label-col"]}>
                <label className={styles["recent-chat"]}>Invite Users</label>
              </Col>
              <Col lg={2} md={2} sm={2} className={styles["top-icons"]}>
                <X size={22} />
              </Col>
            </Row>

            {/* for login images, text and time */}
            <Row>
              <Col
                lg={12}
                md={12}
                sm={12}
                className={styles["invite-textfield-column"]}
              >
                <TextField
                  className={styles["invite-textfield"]}
                  placeholder="Enter Email"
                />
              </Col>
            </Row>
            <Row>
              <Col
                lg={12}
                md={12}
                sm={12}
                className="d-flex justify-content-end"
              >
                <label className={styles["add-another-text"]}>
                  Add Another
                </label>
              </Col>
            </Row>

            <Row className={styles["bottom-button-invite"]}>
              <Col lg={7} md={7} sm={7} className="d-flex justify-content-end">
                <Button
                  text="Send Invitation"
                  className={styles["sendInvite-btn"]}
                />
              </Col>
              <Col
                lg={5}
                md={5}
                sm={5}
                className="d-flex justify-content-start"
              >
                <Button text="Close" className={styles["closeInvite-btn"]} />
              </Col>
            </Row>
          </div>
        </>
      ) : null}

      {chatBoxOpen ? (
        <>
          <div className={styles["openNew-Chat"]}>
            <Row className={styles["chatbox-row-bottom"]}>
              <Col lg={2} md={2} sm={2}>
                <img src={JohnCater} className={styles["chatBox-image-john"]} />
              </Col>
              <Col lg={6} md={6} sm={6} className={styles["label-col"]}>
                <label className={styles["recent-chatBox"]}>John Carter</label>
              </Col>
              <Col lg={4} md={4} sm={4} className={styles["chatBox-top-icons"]}>
                <X size={20} />
              </Col>
            </Row>

            <div className={styles["bottom-chat-box"]}>
              <Row>
                <Col lg={9} md={9} sm={9} className="mb-2">
                  <TextField className={styles["textfield-chatbox"]} />
                </Col>
                <Col lg={3} md={3} sm={3} className={styles["btm-icons"]}>
                  <Send size={20} />
                  <Paperclip size={20} />
                </Col>
              </Row>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Sidebar;
