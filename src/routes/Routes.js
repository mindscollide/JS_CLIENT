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
import CreatePassword from "../container/CreatePasseword/CreatePassword";

export const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route exact path="/" element={<SignIn />} />
      <Route exact path="SignUp" element={<SignUp />} />
      <Route exact path="createpassword" element={<CreatePassword />} />
      <Route exact path="Signuprequest" element={<SignUpRequest />} />
      <Route exact path="/Js/" element={<Dashboard />}>
        <Route path="Home" element={<Client />} />
        <Route path="" element={<Client />} />
        <Route path="calculator" element={<Calculator />} />
      </Route>
    </>
  )
);
