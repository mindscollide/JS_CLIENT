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

// For Refresh Token
const authenticationRefreshToken = {
  RequestMethod: "ServiceManager.RefreshToken",
};

// for create Corporate Password
const createCorporateUserApi = {
  RequestMethod: "ServiceManager.CreateCorporatePassword",
};

// For Send Email For Reset Password Api
const sendEmailResetPasswordAPI = {
  RequestMethod: "ServiceManager.SendEmailForResetPasword",
};

export {
  _token,
  authenticationLogIn,
  authenticationSignUp,
  authenticationUserRole,
  CorporateUserLoggedIn,
  createCorporateUserApi,
  authenticationRefreshToken,
  sendEmailResetPasswordAPI,
};
