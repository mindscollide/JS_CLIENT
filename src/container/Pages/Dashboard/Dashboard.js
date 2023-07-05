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
      <Row>
        <Col lg={12} md={12} sm={12} className="d-flex gap-5">
          <Outlet />
          {location.pathname === "/Js/calculator" && <Sidebar />}
        </Col>
      </Row>
    </Fragment>
  );
};

export default Dashboard;
