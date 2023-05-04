import {
  Route,
  createRoutesFromElements,
  createHashRouter,
} from "react-router-dom";

import SignIn from "../container/Auth_Login/SignIn/SignIn";
import Client from "../container/client/Client";
import Calculator from "../container/Calculator/Calculator";
import SignUpRequest from "../container/Auth_Login/SignUp_Request/Signup-Request";
import SignUp from "../container/Auth_Login/SignUp/SignUp";

import Dashboard from "../container/Pages/Dashboard/Dashboard";

export const router = createHashRouter(
  createRoutesFromElements(
    <>
    <Route exact path="SignUp" element={<SignUp />} />
    <Route exact path="Signuprequest" element={<SignUpRequest />} />
      <Route exact path="LogIn" element={<SignIn />} />
      <Route exact path="/" element={<Dashboard />}>
        <Route path="" element={<Client />} />
        <Route path="client" element={<Client />} />
        <Route path="calculator" element={<Calculator />} />
      </Route>
    </>
  )
);
