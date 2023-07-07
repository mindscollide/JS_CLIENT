const _token = localStorage.getItem("token");

const authenticationLogIn = {
  RequestMethod: "ServiceManager.Login",
};

const authenticationSignUp = {
  RequestMethod: "ServiceManager.SignUp",
};

const authenticationUserRole = {
  RequestMethod: "ServiceManager.RoleList",
};

const CorporateUserLoggedIn = {
  RequestMethod: "ServiceManager.CorporateUserLogin",
};

export {
  authenticationLogIn,
  authenticationSignUp,
  authenticationUserRole,
  CorporateUserLoggedIn,
};
