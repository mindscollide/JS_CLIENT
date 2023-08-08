import React, { useState, useEffect } from "react";
import { Row, Col, Nav } from "react-bootstrap";
import JohnCater from "../../../assets/images/profile3.png";
import { Button, TextField } from "../../../components/elements";
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

  //chat panel On Close
  const closeHandler = () => {
    setOpenChat(false);
    setChatBoxOpen(false);
  };

  //close chat small bar
  const closeChatHandler = () => {
    setChatBoxOpen(false);
  };

  //loggin user panel close
  const closeLoginPanel = () => {
    setOpenLogIn(false);
    setChatBoxOpen(false);
  };

  //invite User close panel
  const closeInvitePanel = () => {
    setOpenInvite(false);
    setChatBoxOpen(false);
  };

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
              <Col lg={8} md={8} sm={8}>
                <label className={styles["recent-chat"]}>Recent Chat</label>
              </Col>
              <Col
                lg={4}
                md={4}
                sm={4}
                className="d-flex justify-content-end gap-2 align-items-center"
              >
                <i className={`${"icon-search"} ${styles["ExpandIcon"]}`}></i>
                <i
                  className={`${"icon-maximize1"} ${styles["ExpandIcon"]}`}
                ></i>
                <i
                  className={`${"icon-close"} ${styles["ExpandIcon"]}`}
                  onClick={closeHandler}
                ></i>
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
                    <strong className={styles["ParticipantName"]}>
                      John Carter
                    </strong>
                    <span className={styles["BracketName"]}>(Gul Ahmed)</span>
                    <br />
                    <span className={styles["BracketName"]}>
                      Stock futures little changed...
                    </span>
                  </label>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  sm={3}
                  className="d-flex align-items-center mb-3"
                >
                  <span className={styles["label-image-time"]}>
                    12:40:00 AM
                  </span>
                </Col>
              </Row>
              <Row>
                <Col lg={2} md={2} sm={2}>
                  <img src={JohnCater} className={styles["image-john"]} />
                </Col>
                <Col lg={7} md={7} sm={7}>
                  <label
                    className={styles["label-image-chat"]}
                    onClick={() => setChatBoxOpen(!chatBoxOpen)}
                  >
                    <strong className={styles["ParticipantName"]}>
                      John Carter
                    </strong>
                    <span className={styles["BracketName"]}>(Gul Ahmed)</span>
                    <br />
                    <span className={styles["BracketName"]}>
                      Stock futures little changed...
                    </span>
                  </label>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  sm={3}
                  className="d-flex align-items-center mb-3"
                >
                  <span className={styles["label-image-time"]}>
                    12:40:00 AM
                  </span>
                </Col>
              </Row>
              <Row>
                <Col lg={2} md={2} sm={2}>
                  <img src={JohnCater} className={styles["image-john"]} />
                </Col>
                <Col lg={7} md={7} sm={7}>
                  <label
                    className={styles["label-image-chat"]}
                    onClick={() => setChatBoxOpen(!chatBoxOpen)}
                  >
                    <strong className={styles["ParticipantName"]}>
                      John Carter
                    </strong>
                    <span className={styles["BracketName"]}>(Gul Ahmed)</span>
                    <br />
                    <span className={styles["BracketName"]}>
                      Stock futures little changed...
                    </span>
                  </label>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  sm={3}
                  className="d-flex align-items-center mb-3"
                >
                  <span className={styles["label-image-time"]}>
                    12:40:00 AM
                  </span>
                </Col>
              </Row>
              <Row>
                <Col lg={2} md={2} sm={2}>
                  <img src={JohnCater} className={styles["image-john"]} />
                </Col>
                <Col lg={7} md={7} sm={7}>
                  <label
                    className={styles["label-image-chat"]}
                    onClick={() => setChatBoxOpen(!chatBoxOpen)}
                  >
                    <strong className={styles["ParticipantName"]}>
                      John Carter
                    </strong>
                    <span className={styles["BracketName"]}>(Gul Ahmed)</span>
                    <br />
                    <span className={styles["BracketName"]}>
                      Stock futures little changed...
                    </span>
                  </label>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  sm={3}
                  className="d-flex align-items-center mb-3"
                >
                  <span className={styles["label-image-time"]}>
                    12:40:00 AM
                  </span>
                </Col>
              </Row>
              <Row>
                <Col lg={2} md={2} sm={2}>
                  <img src={JohnCater} className={styles["image-john"]} />
                </Col>
                <Col lg={7} md={7} sm={7}>
                  <label
                    className={styles["label-image-chat"]}
                    onClick={() => setChatBoxOpen(!chatBoxOpen)}
                  >
                    <strong className={styles["ParticipantName"]}>
                      John Carter
                    </strong>
                    <span className={styles["BracketName"]}>(Gul Ahmed)</span>
                    <br />
                    <span className={styles["BracketName"]}>
                      Stock futures little changed...
                    </span>
                  </label>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  sm={3}
                  className="d-flex align-items-center mb-3"
                >
                  <span className={styles["label-image-time"]}>
                    12:40:00 AM
                  </span>
                </Col>
              </Row>
              <Row>
                <Col lg={2} md={2} sm={2}>
                  <img src={JohnCater} className={styles["image-john"]} />
                </Col>
                <Col lg={7} md={7} sm={7}>
                  <label
                    className={styles["label-image-chat"]}
                    onClick={() => setChatBoxOpen(!chatBoxOpen)}
                  >
                    <strong className={styles["ParticipantName"]}>
                      John Carter
                    </strong>
                    <span className={styles["BracketName"]}>(Gul Ahmed)</span>
                    <br />
                    <span className={styles["BracketName"]}>
                      Stock futures little changed...
                    </span>
                  </label>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  sm={3}
                  className="d-flex align-items-center mb-3"
                >
                  <span className={styles["label-image-time"]}>
                    12:40:00 AM
                  </span>
                </Col>
              </Row>
              <Row>
                <Col lg={2} md={2} sm={2}>
                  <img src={JohnCater} className={styles["image-john"]} />
                </Col>
                <Col lg={7} md={7} sm={7}>
                  <label
                    className={styles["label-image-chat"]}
                    onClick={() => setChatBoxOpen(!chatBoxOpen)}
                  >
                    <strong className={styles["ParticipantName"]}>
                      John Carter
                    </strong>
                    <span className={styles["BracketName"]}>(Gul Ahmed)</span>
                    <br />
                    <span className={styles["BracketName"]}>
                      Stock futures little changed...
                    </span>
                  </label>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  sm={3}
                  className="d-flex align-items-center mb-3"
                >
                  <span className={styles["label-image-time"]}>
                    12:40:00 AM
                  </span>
                </Col>
              </Row>
              <Row>
                <Col lg={2} md={2} sm={2}>
                  <img src={JohnCater} className={styles["image-john"]} />
                </Col>
                <Col lg={7} md={7} sm={7}>
                  <label
                    className={styles["label-image-chat"]}
                    onClick={() => setChatBoxOpen(!chatBoxOpen)}
                  >
                    <strong className={styles["ParticipantName"]}>
                      John Carter
                    </strong>
                    <span className={styles["BracketName"]}>(Gul Ahmed)</span>
                    <br />
                    <span className={styles["BracketName"]}>
                      Stock futures little changed...
                    </span>
                  </label>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  sm={3}
                  className="d-flex align-items-center mb-3"
                >
                  <span className={styles["label-image-time"]}>
                    12:40:00 AM
                  </span>
                </Col>
              </Row>
              <Row>
                <Col lg={2} md={2} sm={2}>
                  <img src={JohnCater} className={styles["image-john"]} />
                </Col>
                <Col lg={7} md={7} sm={7}>
                  <label
                    className={styles["label-image-chat"]}
                    onClick={() => setChatBoxOpen(!chatBoxOpen)}
                  >
                    <strong className={styles["ParticipantName"]}>
                      John Carter
                    </strong>
                    <span className={styles["BracketName"]}>(Gul Ahmed)</span>
                    <br />
                    <span className={styles["BracketName"]}>
                      Stock futures little changed...
                    </span>
                  </label>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  sm={3}
                  className="d-flex align-items-center mb-3"
                >
                  <span className={styles["label-image-time"]}>
                    12:40:00 AM
                  </span>
                </Col>
              </Row>
              <Row>
                <Col lg={2} md={2} sm={2}>
                  <img src={JohnCater} className={styles["image-john"]} />
                </Col>
                <Col lg={7} md={7} sm={7}>
                  <label
                    className={styles["label-image-chat"]}
                    onClick={() => setChatBoxOpen(!chatBoxOpen)}
                  >
                    <strong className={styles["ParticipantName"]}>
                      John Carter
                    </strong>
                    <span className={styles["BracketName"]}>(Gul Ahmed)</span>
                    <br />
                    <span className={styles["BracketName"]}>
                      Stock futures little changed...
                    </span>
                  </label>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  sm={3}
                  className="d-flex align-items-center mb-3"
                >
                  <span className={styles["label-image-time"]}>
                    12:40:00 AM
                  </span>
                </Col>
              </Row>
            </div>
          </div>
        </>
      ) : openLogIn ? (
        <>
          <div className={styles["openChat-panel"]}>
            <Row className={styles["recent-chat-row-bottom"]}>
              <Col lg={8} md={8} sm={8}>
                <label className={styles["recent-chat"]}>Logged In Users</label>
              </Col>
              <Col
                lg={4}
                md={4}
                sm={4}
                className="d-flex align-items-center gap-2 justify-content-end"
              >
                <i className={`${"icon-search"} ${styles["ExpandIcon"]}`}></i>
                <i
                  className={`${"icon-maximize1"} ${styles["ExpandIcon"]}`}
                ></i>
                <i
                  className={`${"icon-close"} ${styles["ExpandIcon"]}`}
                  onClick={closeLoginPanel}
                ></i>
              </Col>
              <hr className={styles["Line_bottom_loggedin_user"]} />
            </Row>

            {/* for login images, text and time */}
            <Row className={styles["login-main-div"]}>
              <Col lg={12} md={12} sm={12}>
                <Row>
                  <Col lg={1} md={1} sm={1} className="align-items-center">
                    <i className={styles["user-available"]}></i>
                  </Col>
                  <Col lg={4} md={4} sm={4}>
                    <label className={styles["user-login-label-heading"]}>
                      John Carter Gul Ahmed
                    </label>
                  </Col>
                  <Col lg={3} md={3} sm={3} className="m-0 p-0">
                    <label className={styles["login-date-and-time"]}>
                      10-10-2022 01:00
                    </label>
                  </Col>
                  <Col
                    lg={2}
                    md={2}
                    sm={2}
                    className="d-flex align-items-center m-0 p-0"
                  >
                    <span className={styles["login-date-and-time"]}>
                      00:05:06
                    </span>
                  </Col>
                  <Col lg={2} md={2} sm={2}>
                    <Button
                      // icon={<ChatDots />}
                      onClick={() => setChatBoxOpen(!chatBoxOpen)}
                      className={styles["chat-button-loggin"]}
                    />
                  </Col>
                </Row>
                <hr className={styles["Credentials_below_line"]} />
              </Col>
            </Row>
            <Row className={styles["login-main-div"]}>
              <Col lg={12} md={12} sm={12}>
                <Row>
                  <Col lg={1} md={1} sm={1} className="align-items-center">
                    <i className={styles["user-available"]}></i>
                  </Col>
                  <Col lg={4} md={4} sm={4}>
                    <label className={styles["user-login-label-heading"]}>
                      John Carter Gul Ahmed
                    </label>
                  </Col>
                  <Col lg={3} md={3} sm={3} className="m-0 p-0">
                    <label className={styles["login-date-and-time"]}>
                      10-10-2022 01:00
                    </label>
                  </Col>
                  <Col
                    lg={2}
                    md={2}
                    sm={2}
                    className="d-flex align-items-center m-0 p-0"
                  >
                    <span className={styles["login-date-and-time"]}>
                      00:05:06
                    </span>
                  </Col>
                  <Col lg={2} md={2} sm={2}>
                    <Button
                      // icon={<ChatDots />}
                      onClick={() => setChatBoxOpen(!chatBoxOpen)}
                      className={styles["chat-button-loggin"]}
                    />
                  </Col>
                </Row>
                <hr className={styles["Credentials_below_line"]} />
              </Col>
            </Row>
            <Row className={styles["login-main-div"]}>
              <Col lg={12} md={12} sm={12}>
                <Row>
                  <Col lg={1} md={1} sm={1} className="align-items-center">
                    <i className={styles["user-available"]}></i>
                  </Col>
                  <Col lg={4} md={4} sm={4}>
                    <label className={styles["user-login-label-heading"]}>
                      John Carter Gul Ahmed
                    </label>
                  </Col>
                  <Col lg={3} md={3} sm={3} className="m-0 p-0">
                    <label className={styles["login-date-and-time"]}>
                      10-10-2022 01:00
                    </label>
                  </Col>
                  <Col
                    lg={2}
                    md={2}
                    sm={2}
                    className="d-flex align-items-center m-0 p-0"
                  >
                    <span className={styles["login-date-and-time"]}>
                      00:05:06
                    </span>
                  </Col>
                  <Col lg={2} md={2} sm={2}>
                    <Button
                      // icon={<ChatDots />}
                      onClick={() => setChatBoxOpen(!chatBoxOpen)}
                      className={styles["chat-button-loggin"]}
                    />
                  </Col>
                </Row>
                <hr className={styles["Credentials_below_line"]} />
              </Col>
            </Row>
            <Row className={styles["login-main-div"]}>
              <Col lg={12} md={12} sm={12}>
                <Row>
                  <Col lg={1} md={1} sm={1} className="align-items-center">
                    <i className={styles["user-available"]}></i>
                  </Col>
                  <Col lg={4} md={4} sm={4}>
                    <label className={styles["user-login-label-heading"]}>
                      John Carter Gul Ahmed
                    </label>
                  </Col>
                  <Col lg={3} md={3} sm={3} className="m-0 p-0">
                    <label className={styles["login-date-and-time"]}>
                      10-10-2022 01:00
                    </label>
                  </Col>
                  <Col
                    lg={2}
                    md={2}
                    sm={2}
                    className="d-flex align-items-center m-0 p-0"
                  >
                    <span className={styles["login-date-and-time"]}>
                      00:05:06
                    </span>
                  </Col>
                  <Col lg={2} md={2} sm={2}>
                    <Button
                      // icon={<ChatDots />}
                      onClick={() => setChatBoxOpen(!chatBoxOpen)}
                      className={styles["chat-button-loggin"]}
                    />
                  </Col>
                </Row>
                <hr className={styles["Credentials_below_line"]} />
              </Col>
            </Row>
            <Row className={styles["login-main-div"]}>
              <Col lg={12} md={12} sm={12}>
                <Row>
                  <Col lg={1} md={1} sm={1} className="align-items-center">
                    <i className={styles["user-available"]}></i>
                  </Col>
                  <Col lg={4} md={4} sm={4}>
                    <label className={styles["user-login-label-heading"]}>
                      John Carter Gul Ahmed
                    </label>
                  </Col>
                  <Col lg={3} md={3} sm={3} className="m-0 p-0">
                    <label className={styles["login-date-and-time"]}>
                      10-10-2022 01:00
                    </label>
                  </Col>
                  <Col
                    lg={2}
                    md={2}
                    sm={2}
                    className="d-flex align-items-center m-0 p-0"
                  >
                    <span className={styles["login-date-and-time"]}>
                      00:05:06
                    </span>
                  </Col>
                  <Col lg={2} md={2} sm={2}>
                    <Button
                      // icon={<ChatDots />}
                      onClick={() => setChatBoxOpen(!chatBoxOpen)}
                      className={styles["chat-button-loggin"]}
                    />
                  </Col>
                </Row>
                <hr className={styles["Credentials_below_line"]} />
              </Col>
            </Row>
            <Row className={styles["login-main-div"]}>
              <Col lg={12} md={12} sm={12}>
                <Row>
                  <Col lg={1} md={1} sm={1} className="align-items-center">
                    <i className={styles["user-available"]}></i>
                  </Col>
                  <Col lg={4} md={4} sm={4}>
                    <label className={styles["user-login-label-heading"]}>
                      John Carter Gul Ahmed
                    </label>
                  </Col>
                  <Col lg={3} md={3} sm={3} className="m-0 p-0">
                    <label className={styles["login-date-and-time"]}>
                      10-10-2022 01:00
                    </label>
                  </Col>
                  <Col
                    lg={2}
                    md={2}
                    sm={2}
                    className="d-flex align-items-center m-0 p-0"
                  >
                    <span className={styles["login-date-and-time"]}>
                      00:05:06
                    </span>
                  </Col>
                  <Col lg={2} md={2} sm={2}>
                    <Button
                      // icon={<ChatDots />}
                      onClick={() => setChatBoxOpen(!chatBoxOpen)}
                      className={styles["chat-button-loggin"]}
                    />
                  </Col>
                </Row>
                <hr className={styles["Credentials_below_line"]} />
              </Col>
            </Row>
            <Row className={styles["login-main-div"]}>
              <Col lg={12} md={12} sm={12}>
                <Row>
                  <Col lg={1} md={1} sm={1} className="align-items-center">
                    <i className={styles["user-available"]}></i>
                  </Col>
                  <Col lg={4} md={4} sm={4}>
                    <label className={styles["user-login-label-heading"]}>
                      John Carter Gul Ahmed
                    </label>
                  </Col>
                  <Col lg={3} md={3} sm={3} className="m-0 p-0">
                    <label className={styles["login-date-and-time"]}>
                      10-10-2022 01:00
                    </label>
                  </Col>
                  <Col
                    lg={2}
                    md={2}
                    sm={2}
                    className="d-flex align-items-center m-0 p-0"
                  >
                    <span className={styles["login-date-and-time"]}>
                      00:05:06
                    </span>
                  </Col>
                  <Col lg={2} md={2} sm={2}>
                    <Button
                      // icon={<ChatDots />}
                      onClick={() => setChatBoxOpen(!chatBoxOpen)}
                      className={styles["chat-button-loggin"]}
                    />
                  </Col>
                </Row>
                <hr className={styles["Credentials_below_line"]} />
              </Col>
            </Row>
            <Row className={styles["login-main-div"]}>
              <Col lg={12} md={12} sm={12}>
                <Row>
                  <Col lg={1} md={1} sm={1} className="align-items-center">
                    <i className={styles["user-available"]}></i>
                  </Col>
                  <Col lg={4} md={4} sm={4}>
                    <label className={styles["user-login-label-heading"]}>
                      John Carter Gul Ahmed
                    </label>
                  </Col>
                  <Col lg={3} md={3} sm={3} className="m-0 p-0">
                    <label className={styles["login-date-and-time"]}>
                      10-10-2022 01:00
                    </label>
                  </Col>
                  <Col
                    lg={2}
                    md={2}
                    sm={2}
                    className="d-flex align-items-center m-0 p-0"
                  >
                    <span className={styles["login-date-and-time"]}>
                      00:05:06
                    </span>
                  </Col>
                  <Col lg={2} md={2} sm={2}>
                    <Button
                      // icon={<ChatDots />}
                      onClick={() => setChatBoxOpen(!chatBoxOpen)}
                      className={styles["chat-button-loggin"]}
                    />
                  </Col>
                </Row>
                <hr className={styles["Credentials_below_line"]} />
              </Col>
            </Row>
            <Row className={styles["login-main-div"]}>
              <Col lg={12} md={12} sm={12}>
                <Row>
                  <Col lg={1} md={1} sm={1} className="align-items-center">
                    <i className={styles["user-available"]}></i>
                  </Col>
                  <Col lg={4} md={4} sm={4}>
                    <label className={styles["user-login-label-heading"]}>
                      John Carter Gul Ahmed
                    </label>
                  </Col>
                  <Col lg={3} md={3} sm={3} className="m-0 p-0">
                    <label className={styles["login-date-and-time"]}>
                      10-10-2022 01:00
                    </label>
                  </Col>
                  <Col
                    lg={2}
                    md={2}
                    sm={2}
                    className="d-flex align-items-center m-0 p-0"
                  >
                    <span className={styles["login-date-and-time"]}>
                      00:05:06
                    </span>
                  </Col>
                  <Col lg={2} md={2} sm={2}>
                    <Button
                      // icon={<ChatDots />}
                      onClick={() => setChatBoxOpen(!chatBoxOpen)}
                      className={styles["chat-button-loggin"]}
                    />
                  </Col>
                </Row>
                <hr className={styles["Credentials_below_line"]} />
              </Col>
            </Row>
            <Row className={styles["login-main-div"]}>
              <Col lg={12} md={12} sm={12}>
                <Row>
                  <Col lg={1} md={1} sm={1} className="align-items-center">
                    <i className={styles["user-available"]}></i>
                  </Col>
                  <Col lg={4} md={4} sm={4}>
                    <label className={styles["user-login-label-heading"]}>
                      John Carter Gul Ahmed
                    </label>
                  </Col>
                  <Col lg={3} md={3} sm={3} className="m-0 p-0">
                    <label className={styles["login-date-and-time"]}>
                      10-10-2022 01:00
                    </label>
                  </Col>
                  <Col
                    lg={2}
                    md={2}
                    sm={2}
                    className="d-flex align-items-center m-0 p-0"
                  >
                    <span className={styles["login-date-and-time"]}>
                      00:05:06
                    </span>
                  </Col>
                  <Col lg={2} md={2} sm={2}>
                    <Button
                      // icon={<ChatDots />}
                      onClick={() => setChatBoxOpen(!chatBoxOpen)}
                      className={styles["chat-button-loggin"]}
                    />
                  </Col>
                </Row>
                <hr className={styles["Credentials_below_line"]} />
              </Col>
            </Row>
          </div>
        </>
      ) : openInvite ? (
        <>
          <div className={styles["openChat-panel"]}>
            <Row className={styles["recent-chat-row-bottom"]}>
              <Col lg={12} md={12} sm={12} className={styles["Bottom_line"]}>
                <Row className={styles["padding"]}>
                  <Col lg={10} md={10} sm={10}>
                    <label className={styles["recent-chat"]}>
                      Invite Users
                    </label>
                  </Col>
                  <Col
                    lg={2}
                    md={2}
                    sm={2}
                    className="d-flex justify-content-end align-items-center"
                  >
                    <i
                      className={`${"icon-close"} ${styles["ExpandIcon"]}`}
                      onClick={closeInvitePanel}
                    ></i>
                  </Col>
                </Row>
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
                  labelClass={"d-none"}
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
              <Col
                lg={12}
                md={12}
                sm={12}
                className="d-flex justify-content-center gap-2"
              >
                <Button
                  text="Send Invitation"
                  className={styles["sendInvite-btn"]}
                />
                <Button text="Close" className={styles["closeInvite-btn"]} />
              </Col>
            </Row>
          </div>
        </>
      ) : null}

      {chatBoxOpen ? (
        <>
          <Row className={styles["openNew-Chat"]}>
            <Col lg={12} md={12} sm={12}>
              <Row className={styles["chatbox-row-bottom"]}>
                <Col
                  lg={2}
                  md={2}
                  sm={2}
                  className="d-flex justify-content-end"
                >
                  <img
                    src={JohnCater}
                    className={styles["chatBox-image-john"]}
                  />
                </Col>
                <Col lg={9} md={9} sm={9} className="m-0 p-0">
                  <span className={styles["recent-chatBox"]}>
                    John Carter
                    <span className={styles["Gul-Ahmed-Class"]}>
                      (Gul Ahmed)
                    </span>
                  </span>
                </Col>
                <Col lg={1} md={1} sm={1}>
                  <i
                    className={`${"icon-close"} ${styles["ExpandIcon"]}`}
                    onClick={closeChatHandler}
                  ></i>
                </Col>
              </Row>

              <Row>
                <Col
                  lg={12}
                  md={12}
                  sm={12}
                  className={styles["bottom-chat-box"]}
                >
                  <Row>
                    <Col lg={10} md={10} sm={12}>
                      <TextField
                        labelClass={"d-none"}
                        className={styles["textfield-chatbox"]}
                      />
                    </Col>
                    <Col
                      lg={2}
                      md={2}
                      sm={12}
                      className="d-flex justify-content-start  align-items-center"
                    >
                      <i className={`${styles["Send"]} ${"icon-send"}`}></i>
                      <i
                        className={`${
                          styles["PaperClip"]
                        } ${"icon-clip-attachment"}`}
                      ></i>
                      {/* <Send className={styles["Send"]} size={22} /> */}
                      {/* <Paperclip className={styles["PaperClip"]} size={22} /> */}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </>
      ) : null}
    </>
  );
};

export default Sidebar;
