import * as actions from "../action_types";

const initialState = {
  UserDetails: null,
  SignInUserDetails: null,
  isLoggedIn: false,
  Loading: false,
  ResponseMessage: "",
  isSignUp: false,
  UserRoleList: [],
  SessionExpeireResponseMessage: "",
  roles: null,
  Token: "",
  Refresh: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOG_IN_INIT:
      return { ...state, Loading: true };

    case actions.LOG_IN_SUCCESS:
      return {
        ...state,
        UserDetails: action.response,
        ResponseMessage: action.message,
        Loading: false,
        Token: action.response.token,
        Refresh: action.response.refreshToken,
      };

    case actions.LOG_IN_FAIL:
      return {
        ...state,
        UserDetails: action.response,
        ResponseMessage: action.message,
        Loading: false,
        Token: "",
        Refresh: "",
      };
    case actions.SIGN_IN_USER_INIT:
      return {
        ...state,
        Loading: true,
      };

    case actions.SIGN_IN_USER_SUCCESS:
      return {
        ...state,
        SignInUserDetails: action.response,
        ResponseMessage: action.message,
        Loading: false,
        Token: action.response.token,
        Refresh: action.response.refreshToken,
      };

    case actions.SIGN_IN_USER_FAIL:
      return {
        ...state,
        SignInUserDetails: action.response,
        ResponseMessage: action.message,
        Loading: false,
        Token: "",
        Refresh: "",
      };
    case actions.SIGN_UP_INIT:
      return { ...state, Loading: true };

    case actions.SIGN_UP_SUCCESS:
      return {
        ...state,
        Loading: false,
        isLoggedIn: true,
        ResponseMessage: action.message,
      };

    case actions.SIGN_UP_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        Loading: false,
        ResponseMessage: action.message,
      };

    case actions.SIGN_OUT:
      localStorage.clear();
      return {
        ...state,
        UserDetails: null,
        isLoggedIn: false,
        Loading: false,
        Token: "",
        Refresh: "",
        SessionExpeireResponseMessage: action.message,
      };

    case actions.USER_ROLE_INIT:
      return { ...state, Loading: true };

    case actions.USER_ROLE_SUCCESS:
      return {
        ...state,
        Loading: false,
        UserRoleList: action.response,
        ResponseMessage: action.message,
      };

    case actions.USER_ROLE_FAIL:
      return {
        ...state,
        Loading: false,
        UserRoleList: [],
        ResponseMessage: action.message,
      };

    default:
      return { ...state };
  }
};

export default authReducer;
