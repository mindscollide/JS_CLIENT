import React, { Fragment, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../../../components/layout/Header/Header";
import Client from "../../client/Client";
import Calculator from "../../Calculator/Calculator";
import Sidebar from "../../../components/layout/Sidebar/Sidebar";

const Dashboard = () => {
  const location = useLocation();
  const [isClient, setIsClient] = useState(true);

  return (
    <Fragment>
      <Header />
      {location.pathname === "/Js/calculator" && <Sidebar />}

      <Outlet />
    </Fragment>
  );
};

export default Dashboard;
