import { Navigate, Outlet } from "react-router-dom";
const PrivateRoutes = () => {
  let RoleID = JSON.parse(localStorage.getItem("roleID"));
  const currentUser = RoleID === 2 ? true : false;
  const token = localStorage.getItem("token");
  return currentUser && token ? <Outlet /> : <Navigate to="*" />;
};
export default PrivateRoutes;
