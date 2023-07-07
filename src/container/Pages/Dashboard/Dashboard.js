import React, { Fragment, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../../../components/layout/Header/Header";
import Client from "../../client/Client";
import Calculator from "../../Calculator/Calculator";
import Sidebar from "../../../components/layout/Sidebar/Sidebar";
import { Col, Row } from "react-bootstrap";

const Dashboard = () => {
  const location = useLocation();
  const [isClient, setIsClient] = useState(true);

  return (
    <Fragment>
      <Header />
      <Outlet />
      {location.pathname === "/Js/calculator" && <Sidebar />}
      {/* <Row>
        <Col lg={11} md={11} sm={11}>
       
        </Col>
        <Col lg={1} md={1} sm={1}>
     
        </Col>
      </Row> */}
    </Fragment>
  );
};

export default Dashboard;
