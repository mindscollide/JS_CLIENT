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

export { authenticationLogIn, authenticationSignUp, authenticationUserRole };
