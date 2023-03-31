import React, { useState, useEffect } from "react";
import { Row, Col, Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import Chat from "../../../assets/images/Comment-Icon.png";
import Users from "../../../assets/images/Assignees-Icon.png";
import Broadcast from "../../../assets/images/6.png";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  //for chat open after click sidebar chat icon
  const [openChat, setOpenChat] = useState(false);

  //for open chat panel
  const openChatPanelHandler = async () => {
    setOpenChat(true);
  };
  console.log("clickedd", openChatPanelHandler);

  return (
    <>
      <Row className={styles["sidebar-row"]}>
        <Col sm={11} className={""}></Col>
        <Col sm={1} className={styles["js-sidebar"]}>
          <Nav disabled={true} className={styles["new_sidebar"]}>
            <>
              {/* ChatIcon */}
              <Nav.Link disabled={true}>
                <img src={Chat} width={40} onClick={openChatPanelHandler} />
                <label
                  className={styles["sidebar-text"]}
                  onClick={openChatPanelHandler}
                >
                  Chat
                </label>
              </Nav.Link>

              {/* Logged In User */}
              <Nav.Link disabled={true}>
                <img src={Users} />
                <label className={styles["sidebar-text"]}>
                  Logged In Users
                </label>
              </Nav.Link>

              {/* Invite User */}
              <Nav.Link disabled={true}>
                <img src={Broadcast} />
                <label className={styles["sidebar-text"]}>Invite users</label>
              </Nav.Link>

              {/* Broadcast user */}
              <Nav.Link disabled={true}>
                <img src={Broadcast} />
                <label className={styles["sidebar-text"]}>
                  Broadcast message
                </label>
              </Nav.Link>

              {/* Setting User */}
              <Nav.Link disabled={true}>
                <img src={Broadcast} />
                <label className={styles["sidebar-text"]}>Settings</label>
              </Nav.Link>

              {/* Broadcast message */}
              <Nav.Link disabled={true}></Nav.Link>
            </>
          </Nav>
        </Col>
      </Row>

      {openChat === true ? (
        <>
          <div className={styles["openChat-panel"]}>
            <Row>
              <Col lg={4} md={4} sm={12}>
                <label>Chat panel</label>
              </Col>
            </Row>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Sidebar;
