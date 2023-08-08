import * as actions from "../action_types";
import axios from "axios";
import {
  CorporateUserLoggedIn,
  authenticationLogIn,
  authenticationSignUp,
  authenticationUserRole,
  createCorporateUserApi,
  authenticationRefreshToken,
  sendEmailResetPasswordAPI,
} from "../../assets/common/apis/Api_config";
import { authenticationAPI } from "../../assets/common/apis/Api_ends_points";

const logininit = () => {
  return {
    type: actions.LOG_IN_INIT,
  };
};

const loginsuccess = (response, message) => {
  return {
    type: actions.LOG_IN_SUCCESS,
    response: response,
    message: message,
  };
};

const loginfail = (message) => {
  return {
    type: actions.LOG_IN_FAIL,
    message: message,
  };
};

const signupInit = () => {
  return {
    type: actions.SIGN_UP_INIT,
  };
};

const signupSuccess = (response, message) => {
  return {
    type: actions.SIGN_UP_SUCCESS,
    response: response,
    message: message,
  };
};

const signupFail = (response, message) => {
  return {
    type: actions.SIGN_UP_FAIL,
    response: response,
    message: message,
  };
};

const signOut = (navigate, message) => {
  localStorage.clear();
  navigate("/");
  if (message !== "") {
    return {
      type: actions.SIGN_OUT,
      message: message,
    };
  } else {
    return {
      type: actions.SIGN_OUT,
    };
  }
};

const rolesInit = () => {
  return {
    type: actions.USER_ROLE_INIT,
  };
};

const rolesSuccess = (response, message) => {
  return {
    type: actions.USER_ROLE_SUCCESS,
    response: response,
    message: message,
  };
};

const rolesFail = (message) => {
  return {
    type: actions.USER_ROLE_FAIL,
    message: message,
  };
};

//signIn API Function
const logIn = (UserData, navigate) => {
  console.log("logincredentials", UserData);
  var min = 10000;
  var max = 90000;
  var id = min + Math.random() * (max - min);
  let Data = {
    UserName: UserData.UserName,
    Password: UserData.Password,
    DeviceID: id.toString(),
    Device: "browser",
  };
  console.log("logincredentials", Data);
  return (dispatch) => {
    dispatch(logininit());
    let form = new FormData();
    form.append("RequestMethod", authenticationLogIn.RequestMethod);
    form.append("RequestData", JSON.stringify(Data));
    axios({
      method: "post",
      url: authenticationAPI,
      data: form,
    })
      .then(async (response) => {
        if (response.data.responseCode === 200) {
          if (response.data.responseResult.isExecuted === true) {
            if (
              response.data.responseResult.responseMessage ===
              "ERM_AuthService_AuthManager_Login_01"
            ) {
              dispatch(loginfail("Device does not exists"));
            } else if (
              response.data.responseResult.responseMessage ===
              "ERM_AuthService_AuthManager_Login_02"
            ) {
              dispatch(loginfail("Device ID does not exists"));
            } else if (
              response.data.responseResult.responseMessage ===
              "ERM_AuthService_AuthManager_Login_03"
            ) {
              if (response.data.responseResult.roleID === 2) {
                localStorage.setItem(
                  "userID",
                  response.data.responseResult.userID
                );
                localStorage.setItem(
                  "firstName",
                  response.data.responseResult.firstName
                );
                localStorage.setItem(
                  "lastName",
                  response.data.responseResult.lastName
                );
                localStorage.setItem(
                  "userName",
                  response.data.responseResult.userName
                );
                localStorage.setItem(
                  "roleID",
                  response.data.responseResult.roleID
                );
                localStorage.setItem(
                  "token",
                  response.data.responseResult.token
                );
                localStorage.setItem(
                  "refreshToken",
                  response.data.responseResult.refreshToken
                );
                navigate("/Js/");
                dispatch(loginsuccess("Successfully Logged In"));
              } else if (response.data.responseResult.roleID === 4) {
                localStorage.setItem(
                  "userID",
                  response.data.responseResult.userID
                );
                localStorage.setItem(
                  "firstName",
                  response.data.responseResult.firstName
                );
                localStorage.setItem(
                  "lastName",
                  response.data.responseResult.lastName
                );
                localStorage.setItem(
                  "userName",
                  response.data.responseResult.userName
                );
                localStorage.setItem(
                  "roleID",
                  response.data.responseResult.roleID
                );
                localStorage.setItem(
                  "token",
                  response.data.responseResult.token
                );
                localStorage.setItem(
                  "refreshToken",
                  response.data.responseResult.refreshToken
                );
                navigate("/AdminDashboard/");
                dispatch(loginsuccess("Successfully Logged In"));
              } else {
                dispatch(
                  loginfail("This user is not authorise for this domain")
                );
              }
            } else if (
              response.data.responseResult.responseMessage ===
              "ERM_AuthService_AuthManager_Login_04"
            ) {
              dispatch(
                loginfail("Invalid Credentials. Please enter correct password")
              );
            } else if (
              response.data.responseResult.responseMessage ===
              "ERM_AuthService_AuthManager_Login_05"
            ) {
              dispatch(
                loginfail(
                  "Your account has been Locked. Please contact Data Strategy - BST"
                )
              );
            } else if (
              response.data.responseResult.responseMessage ===
              "ERM_AuthService_AuthManager_Login_06"
            ) {
              dispatch(
                loginfail(
                  "Your account has been Disabled. Please contact Data Strategy - BST"
                )
              );
            } else if (
              response.data.responseResult.responseMessage ===
              "ERM_AuthService_AuthManager_Login_07"
            ) {
              dispatch(
                loginfail(
                  "Your account has been Closed. Please contact Data Strategy - BST"
                )
              );
            } else if (
              response.data.responseResult.responseMessage ===
              "ERM_AuthService_AuthManager_Login_08"
            ) {
              dispatch(
                loginfail(
                  "Account set to Dormant due to InActivity. Please contact Data Strategy - BST"
                )
              );
            } else if (
              response.data.responseResult.responseMessage ===
              "ERM_AuthService_AuthManager_Login_09"
            ) {
              dispatch(loginfail("User could not be Verified"));
            } else if (
              response.data.responseResult.responseMessage ===
              "ERM_AuthService_AuthManager_Login_10"
            ) {
              dispatch(
                loginfail("Not a valid user. Please login with valid user")
              );
            } else if (
              response.data.responseResult.responseMessage ===
              "ERM_AuthService_AuthManager_Login_011"
            ) {
              dispatch(loginfail("something went wrong"));
            }
          } else {
            dispatch(loginfail("something went wrong"));
            console.log("something went wrong");
          }
        } else {
          dispatch(loginfail("something went wrong"));
          console.log("something went wrong");
        }
      })
      .catch((response) => {
        dispatch(loginfail("something went wrong"));
      });
  };
};

//Sign_In_Corporate
const CoprporateUserSignINinit = () => {
  return {
    type: actions.SIGN_IN_USER_INIT,
  };
};

const CorporateUuserSignINSuccess = (action, response) => {
  return {
    type: actions.SIGN_IN_USER_SUCCESS,
    action: action,
    response: response,
  };
};

const CorporateUuserSignINFailed = (response) => {
  return {
    type: actions.SIGN_IN_USER_FAIL,
    response: response,
  };
};

const LoginUser = (UserData, navigate) => {
  console.log("logincredentials", UserData);
  var min = 10000;
  var max = 90000;
  var id = min + Math.random() * (max - min);
  let Data = {
    Email: UserData.UserName,
    Password: UserData.Password,
    DeviceID: id.toString(),
    Device: "browser",
  };
  console.log("logincredentials", Data);
  return (dispatch) => {
    dispatch(logininit());
    let form = new FormData();
    form.append("RequestMethod", CorporateUserLoggedIn.RequestMethod);
    form.append("RequestData", JSON.stringify(Data));
    axios({
      method: "post",
      url: authenticationAPI,
      data: form,
    })
      .then(async (response) => {
        console.log("responseresponseresponse", response);
        if (response.data.responseCode === 200) {
          if (response.data.responseResult.isExecuted === true) {
            if (
              response.data.responseResult.responseMessage ===
              "ERM_AuthService_AuthManager_CorporateUserLogin_01"
            ) {
              dispatch(CorporateUuserSignINFailed("Device does not exists"));
            } else if (
              response.data.responseResult.responseMessage ===
              "ERM_AuthService_AuthManager_CorporateUserLogin_02"
            ) {
              dispatch(CorporateUuserSignINFailed("Device ID does not exists"));
            } else if (
              response.data.responseResult.responseMessage ===
              "ERM_AuthService_AuthManager_CorporateUserLogin_03"
            ) {
              if (response.data.responseResult.roleID === 2) {
                localStorage.setItem(
                  "loginTime",
                  response.data.responseResult.loginTime
                );
                localStorage.setItem(
                  "userID",
                  response.data.responseResult.userID
                );
                localStorage.setItem(
                  "firstName",
                  response.data.responseResult.firstName
                );
                localStorage.setItem(
                  "lastName",
                  response.data.responseResult.lastName
                );
                localStorage.setItem(
                  "userName",
                  response.data.responseResult.userName
                );
                localStorage.setItem(
                  "roleID",
                  response.data.responseResult.roleID
                );
                localStorage.setItem(
                  "corporateID",
                  response.data.responseResult.corporateID
                );
                localStorage.setItem(
                  "token",
                  response.data.responseResult.token
                );
                localStorage.setItem(
                  "refreshToken",
                  response.data.responseResult.refreshToken
                );
                navigate("/Js/");
                dispatch(CorporateUuserSignINSuccess("Successfully Logged In"));
              } else if (response.data.responseResult.roleID === 1) {
                localStorage.setItem(
                  "loginTime",
                  response.data.responseResult.loginTime
                );
                localStorage.setItem(
                  "userID",
                  response.data.responseResult.userID
                );
                localStorage.setItem(
                  "firstName",
                  response.data.responseResult.firstName
                );
                localStorage.setItem(
                  "lastName",
                  response.data.responseResult.lastName
                );
                localStorage.setItem(
                  "userName",
                  response.data.responseResult.userName
                );
                localStorage.setItem(
                  "roleID",
                  response.data.responseResult.roleID
                );
                localStorage.setItem(
                  "corporateID",
                  response.data.responseResult.corporateID
                );
                localStorage.setItem(
                  "token",
                  response.data.responseResult.token
                );
                localStorage.setItem(
                  "refreshToken",
                  response.data.responseResult.refreshToken
                );
                navigate("/Js/");
                dispatch(CorporateUuserSignINSuccess("Successfully Logged In"));
              } else {
                dispatch(
                  CorporateUuserSignINFailed(
                    "This user is not authorise for this domain"
                  )
                );
              }
            } else if (
              response.data.responseResult.responseMessage ===
              "ERM_AuthService_AuthManager_CorporateUserLogin_04"
            ) {
              dispatch(
                CorporateUuserSignINFailed(
                  "Invalid credentials. Please enter correct password."
                )
              );
            } else if (
              response.data.responseResult.responseMessage ===
              "ERM_AuthService_AuthManager_CorporateUserLogin_05"
            ) {
              dispatch(
                CorporateUuserSignINFailed("Your account has been locked.")
              );
            } else if (
              response.data.responseResult.responseMessage ===
              "ERM_AuthService_AuthManager_CorporateUserLogin_06"
            ) {
              dispatch(
                CorporateUuserSignINFailed("Your account has been disabled.")
              );
            } else if (
              response.data.responseResult.responseMessage ===
              "ERM_AuthService_AuthManager_CorporateUserLogin_07"
            ) {
              dispatch(
                CorporateUuserSignINFailed("Your account has been closed")
              );
            } else if (
              response.data.responseResult.responseMessage ===
              "ERM_AuthService_AuthManager_CorporateUserLogin_08"
            ) {
              dispatch(
                CorporateUuserSignINFailed(
                  "Account set to dormant due to Inactivity."
                )
              );
            } else if (
              response.data.responseResult.responseMessage ===
              "ERM_AuthService_AuthManager_CorporateUserLogin_09"
            ) {
              dispatch(
                CorporateUuserSignINFailed("User could not be Verified")
              );
            } else if (
              response.data.responseResult.responseMessage ===
              "ERM_AuthService_AuthManager_CorporateUserLogin_10"
            ) {
              dispatch(
                CorporateUuserSignINFailed(
                  "Not a valid user. Please login with valid user."
                )
              );
            } else if (
              response.data.responseResult.responseMessage ===
              "ERM_AuthService_AuthManager_CorporateUserLogin_11"
            ) {
              dispatch(
                CorporateUuserSignINFailed("Exception something went wrong")
              );
            } else if (
              response.data.responseResult.responseMessage ===
              "ERM_AuthService_AuthManager_CorporateUserLogin_12"
            ) {
              let getToken = response.data.responseResult.passwordCreationURL
                .split("=")[1]
                .split("%")[0];
              localStorage.setItem("ForPasswordCreation", getToken);
              navigate("/createpassword");
              dispatch(
                CorporateUuserSignINFailed(
                  "Valid User But Password Not Created"
                )
              );
            } else if (
              response.data.responseResult.responseMessage ===
              "ERM_AuthService_AuthManager_CorporateUserLogin_13"
            ) {
              dispatch(
                CorporateUuserSignINFailed(
                  "Please Login With a Corporate User."
                )
              );
            }
          } else {
            dispatch(CorporateUuserSignINFailed("something went wrong"));
            console.log("something went wrong");
          }
        } else {
          dispatch(CorporateUuserSignINFailed("something went wrong"));
          console.log("something went wrong");
        }
      })
      .catch((response) => {
        dispatch(CorporateUuserSignINFailed("something went wrong"));
      });
  };
};

// getAllUserRoles API Function
const allUserRoles = () => {
  return (dispatch) => {
    dispatch(rolesInit());
    let form = new FormData();
    form.append("RequestMethod", authenticationUserRole.RequestMethod);
    axios({
      method: "POST",
      url: authenticationAPI,
      data: form,
    })
      .then(async (response) => {
        console.log("UserRoleListUserRoleList", response);
        if (response.data.responseCode === 200) {
          if (response.data.responseResult.isExecuted === true) {
            if (
              response.data.responseResult.responseMessage.toLowerCase() ===
              "ERM_AuthService_RoleManager_RoleList_01".toLowerCase()
            ) {
              console.log("UserRoleListUserRoleList", response);
              dispatch(
                rolesSuccess(response.data.responseResult.roles, "Record found")
              );
            } else if (
              response.data.responseResult.responseMessage
                .toLowerCase()
                .includes(
                  "ERM_AuthService_RoleManager_RoleList_02".toLowerCase()
                )
            ) {
              dispatch(rolesFail("No Record Found"));
            } else if (
              response.data.responseResult.responseMessage
                .toLowerCase()
                .includes(
                  "ERM_AuthService_RoleManager_RoleList_03".toLowerCase()
                )
            ) {
              dispatch(rolesFail("Exception No roles available"));
            }
          } else {
            dispatch(rolesFail("Something went wrong"));
            console.log("There's no User Role");
          }
        } else {
          dispatch(rolesFail("Something went wrong"));
          console.log("There's no User Role");
        }
      })
      .catch((response) => {
        dispatch(rolesFail("something went wrong"));
      });
  };
};

// signUp API Function

const signUp = (UserData, navigate) => {
  let Data = {
    LoginID: UserData.LoginID,
    FirstName: UserData.FirstName,
    LastName: UserData.LastName,
    Email: UserData.Email,
    PersonalNumber: UserData.PersonalNumber,
    RoleID: UserData.RoleID,
  };

  return (dispatch) => {
    dispatch(signupInit());
    let form = new FormData();
    form.append("RequestMethod", authenticationSignUp.RequestMethod);
    form.append("RequestData", JSON.stringify(Data));
    axios({
      method: "POST",
      url: authenticationAPI,
      data: form,
    })
      .then(async (response) => {
        if (response.data.responseCode === 200) {
          if (response.data.responseResult.isExecuted === true) {
            if (
              response.data.responseResult.responseMessage ===
              "ERM_AuthService_SignUpManager_SignUp_01"
            ) {
              dispatch(
                signupFail(
                  "Invalid Role for Signup. Please select a role from the given options"
                )
              );
            }
            if (
              response.data.responseResult.responseMessage ===
              "ERM_AuthService_SignUpManager_SignUp_02"
            ) {
              dispatch(
                signupFail(
                  "Signup request for the Login ID is in pending state. Please use a different ID"
                )
              );
            }
            if (
              response.data.responseResult.responseMessage ===
              "ERM_AuthService_SignUpManager_SignUp_03"
            ) {
              if (response.data.responseResult.roleID === 1) {
                localStorage.setItem(
                  "userID",
                  response.data.responseResult.userID
                );
                localStorage.setItem(
                  "firstName",
                  response.data.responseResult.firstName
                );
                localStorage.setItem(
                  "lastName",
                  response.data.responseResult.lastName
                );
                localStorage.setItem(
                  "userName",
                  response.data.responseResult.userName
                );
                localStorage.setItem(
                  "roleID",
                  response.data.responseResult.roleID
                );
                localStorage.setItem(
                  "token",
                  response.data.responseResult.token
                );
                localStorage.setItem(
                  "refreshToken",
                  response.data.responseResult.refreshToken
                );
                navigate("/");
                dispatch(signupSuccess("Successfully signup In"));
              } else if (response.data.responseResult.roleID === 4) {
                localStorage.setItem(
                  "userID",
                  response.data.responseResult.userID
                );
                localStorage.setItem(
                  "firstName",
                  response.data.responseResult.firstName
                );
                localStorage.setItem(
                  "lastName",
                  response.data.responseResult.lastName
                );
                localStorage.setItem(
                  "userName",
                  response.data.responseResult.userName
                );
                localStorage.setItem(
                  "roleID",
                  response.data.responseResult.roleID
                );
                localStorage.setItem(
                  "token",
                  response.data.responseResult.token
                );
                localStorage.setItem(
                  "refreshToken",
                  response.data.responseResult.refreshToken
                );
                navigate("/");
                dispatch(signupSuccess("Successfully Signup In"));
              } else {
                dispatch(
                  loginfail("This user is not authorise for this domain")
                );
              }
            }
            if (
              response.data.responseResult.responseMessage ===
              "ERM_AuthService_SignUpManager_SignUp_04"
            ) {
              dispatch(
                signupFail(
                  "Unable to submit signup request. Please try after some time"
                )
              );
            }
            if (
              response.data.responseResult.responseMessage ===
              "ERM_AuthService_SignUpManager_SignUp_05"
            ) {
              dispatch(signupFail("Something went wrong"));
            }
          } else {
            dispatch(signupFail("Something went wrong"));
            console.log("Something went wrong in signup");
          }
        } else {
          dispatch(signupFail("Something went wrong"));
          console.log("Something went wrong in signup");
        }
      })

      .catch((response) => {
        dispatch(signupFail("Something went wrong"));
      });
  };
};

// REFRESH TOKEN
// FAIL
const refreshtokenFail = (response, message) => {
  return {
    type: actions.REFRESH_TOKEN_FAIL,
    response: response,
    message: message,
  };
};

// SUCCESS
const refreshtokenSuccess = (response, message) => {
  return {
    type: actions.REFRESH_TOKEN_SUCCESS,
    response: response,
    message: message,
  };
};

// API
const RefreshToken = (navigate) => {
  let Token = JSON.parse(localStorage.getItem("token"));
  let RefreshToken = JSON.parse(localStorage.getItem("refreshToken"));
  console.log("RefreshToken", Token, RefreshToken);
  let Data = {
    Token: Token,
    RefreshToken: RefreshToken,
  };
  console.log("RefreshToken", Data);
  return async (dispatch) => {
    let form = new FormData();
    form.append("RequestMethod", authenticationRefreshToken.RequestMethod);
    form.append("RequestData", JSON.stringify(Data));
    await axios({
      method: "post",
      url: authenticationAPI,
      data: form,
    })
      .then(async (response) => {
        console.log("RefreshToken", response);
        if (response.data.responseCode === 200) {
          await dispatch(
            refreshtokenSuccess(
              response.data.responseResult,
              "Refresh Token Update Successfully"
            )
          );
        } else {
          console.log("RefreshToken", response);
          let message2 = "Your Session has expired. Please login again";
          dispatch(signOut(navigate, message2));
          await dispatch(
            refreshtokenFail("Your Session has expired. Please login again.")
          );
        }
      })
      .catch((response) => {
        dispatch(
          refreshtokenFail("Your Session has expired. Please login again.")
        );
      });
  };
};

// FOR CREATE CORPORATE USER API
const createCorporateInit = () => {
  return {
    type: actions.CREATE_CORPORATE_USER_INIT,
  };
};

const createCorporateSuccess = (response, message) => {
  return {
    type: actions.CREATE_CORPORATE_USER_SUCCESS,
    response: response,
    message: message,
  };
};

const createCorporateFail = (message) => {
  return {
    type: actions.CREATE_CORPORATE_USER_FAIL,
    message: message,
  };
};

const createCorporateUser = (navigate, data) => {
  console.log(data, "datadatadatadata");
  return (dispatch) => {
    dispatch(createCorporateInit());
    let form = new FormData();
    form.append("RequestMethod", createCorporateUserApi.RequestMethod);
    form.append("RequestData", JSON.stringify(data));
    axios({
      method: "post",
      url: authenticationAPI,
      data: form,
      headers: {
        _token: data.Token.Token,
      },
    })
      .then(async (response) => {
        if (response.data.responseCode === 417) {
          await dispatch(RefreshToken(navigate));
          dispatch(createCorporateUser(navigate));
        } else if (response.data.responseCode === 200) {
          if (response.data.responseResult.isExecuted === true) {
            if (
              response.data.responseResult.responseMessage
                .toLowerCase()
                .includes(
                  "ERM_AuthService_AuthManager_CreateCorporatePassword_01".toLowerCase()
                )
            ) {
              if (response.data.responseResult.roleID === 1) {
                localStorage.setItem(
                  "loginTime",
                  response.data.responseResult.loginTime
                );
                localStorage.setItem(
                  "userID",
                  response.data.responseResult.userID
                );
                localStorage.setItem(
                  "firstName",
                  response.data.responseResult.firstName
                );
                localStorage.setItem(
                  "lastName",
                  response.data.responseResult.lastName
                );
                localStorage.setItem(
                  "userName",
                  response.data.responseResult.userName
                );
                localStorage.setItem(
                  "roleID",
                  response.data.responseResult.roleID
                );
                localStorage.setItem(
                  "corporateID",
                  response.data.responseResult.corporateID
                );
                localStorage.setItem(
                  "token",
                  response.data.responseResult.token
                );
                localStorage.setItem(
                  "refreshToken",
                  response.data.responseResult.refreshToken
                );
                localStorage.removeItem("ForPasswordCreation");
                navigate("/Js/");
                dispatch(
                  createCorporateSuccess(
                    response.data.responseResult.responseMessage,
                    "Password Create Successfully."
                  )
                );
              } else if (response.data.responseResult.roleID === 4) {
                localStorage.setItem(
                  "userID",
                  response.data.responseResult.userID
                );
                localStorage.setItem(
                  "firstName",
                  response.data.responseResult.firstName
                );
                localStorage.setItem(
                  "lastName",
                  response.data.responseResult.lastName
                );
                localStorage.setItem(
                  "userName",
                  response.data.responseResult.userName
                );
                localStorage.setItem(
                  "roleID",
                  response.data.responseResult.roleID
                );
                localStorage.setItem(
                  "corporateID",
                  response.data.responseResult.corporateID
                );
                localStorage.setItem(
                  "token",
                  response.data.responseResult.token
                );
                localStorage.setItem(
                  "refreshToken",
                  response.data.responseResult.refreshToken
                );
                navigate("/Js/");
                dispatch(createCorporateSuccess("Password Not Create"));
              } else {
                dispatch(createCorporateFail("Password Not Create"));
              }
            } else if (
              response.data.responseResult.responseMessage
                .toLowerCase()
                .includes(
                  "ERM_AuthService_AuthManager_CreateCorporatePassword_02".toLowerCase()
                )
            ) {
              dispatch(createCorporateFail("Password Not Create"));
            } else if (
              response.data.responseResult.responseMessage
                .toLowerCase()
                .includes(
                  "ERM_AuthService_AuthManager_CreateCorporatePassword_03".toLowerCase()
                )
            ) {
              dispatch(createCorporateFail("Invalid Corporate User"));
            } else if (
              response.data.responseResult.responseMessage
                .toLowerCase()
                .includes(
                  "ERM_AuthService_AuthManager_CreateCorporatePassword_04".toLowerCase()
                )
            ) {
              dispatch(createCorporateFail("Password Not Create"));
            } else if (
              response.data.responseResult.responseMessage
                .toLowerCase()
                .includes(
                  "ERM_AuthService_AuthManager_CreateCorporatePassword_05".toLowerCase()
                )
            ) {
              dispatch(createCorporateFail("Exception Something went wrong"));
            }
          } else {
            dispatch(createCorporateFail("Something went wrong"));
          }
        } else {
          dispatch(createCorporateFail("Something went wrong"));
        }
      })
      .catch((response) => {
        dispatch(createCorporateFail("Something went wrong"));
      });
  };
};

// For Send Email For Reset Password Api

const sendEmailCorporateInit = () => {
  return {
    type: actions.SEND_EMAIL_RESET_PASSWORD_INIT,
  };
};

const sendEmailCorporateSuccess = (response, message) => {
  return {
    type: actions.SEND_EMAIL_RESET_PASSWORD_SUCCESS,
    response: response,
    message: message,
  };
};

const sendEmailCorporateFail = (message) => {
  return {
    type: actions.SEND_EMAIL_RESET_PASSWORD_FAIL,
    message: message,
  };
};

const sendEmailResetPasswordApi = (navigate, verifyEmail) => {
  let token = JSON.parse(localStorage.getItem("token"));
  return (dispatch) => {
    dispatch(sendEmailCorporateInit());
    let form = new FormData();
    form.append("RequestMethod", sendEmailResetPasswordAPI.RequestMethod);
    form.append("RequestData", JSON.stringify(verifyEmail));
    axios({
      method: "post",
      url: authenticationAPI,
      data: form,
      headers: {
        _token: token,
      },
    })
      .then(async (response) => {
        if (response.data.responseCode === 417) {
          await dispatch(RefreshToken(navigate));
          dispatch(sendEmailResetPasswordApi(navigate, verifyEmail));
        } else if (response.data.responseCode === 200) {
          if (response.data.responseResult.isExecuted === true) {
            if (
              response.data.responseResult.responseMessage
                .toLowerCase()
                .includes(
                  "ERM_AuthService_AuthManager_SendEmailForResetPasword_01".toLowerCase()
                )
            ) {
              dispatch(
                sendEmailCorporateSuccess(
                  response.data.responseResult.responseMessage,
                  "Email Sent For Reset Password SuccessFully"
                )
              );
            } else if (
              response.data.responseResult.responseMessage
                .toLowerCase()
                .includes(
                  "ERM_AuthService_AuthManager_SendEmailForResetPasword_02".toLowerCase()
                )
            ) {
              dispatch(
                sendEmailCorporateFail("No Email Sent For Reset Password")
              );
            } else if (
              response.data.responseResult.responseMessage
                .toLowerCase()
                .includes(
                  "ERM_AuthService_AuthManager_SendEmailForResetPasword_03".toLowerCase()
                )
            ) {
              dispatch(sendEmailCorporateFail("Invalid Corporate User"));
            } else if (
              response.data.responseResult.responseMessage
                .toLowerCase()
                .includes(
                  "ERM_AuthService_AuthManager_SendEmailForResetPasword_04".toLowerCase()
                )
            ) {
              dispatch(sendEmailCorporateFail("Please Enter A Valid Email"));
            } else if (
              response.data.responseResult.responseMessage
                .toLowerCase()
                .includes(
                  "ERM_AuthService_AuthManager_SendEmailForResetPasword_05".toLowerCase()
                )
            ) {
              dispatch(
                sendEmailCorporateFail("Exception Something went wrong")
              );
            }
          } else {
            dispatch(sendEmailCorporateFail("Something went wrong"));
          }
        } else {
          dispatch(sendEmailCorporateFail("Something went wrong"));
        }
      })
      .catch((response) => {
        dispatch(sendEmailCorporateFail("Something went wrong"));
      });
  };
};

export {
  logIn,
  signUp,
  signOut,
  allUserRoles,
  LoginUser,
  createCorporateUser,
  sendEmailResetPasswordApi,
};
