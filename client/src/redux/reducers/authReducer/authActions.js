const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

export const LoginAction = (value) => ({ type: LOGIN, payload: value });

export const LogoutAction = () => ({ type: LOGOUT, payload: "" });

export const SetUserNameAction = (value) => ({
  type: "SET_USERNAME",
  payload: value,
});

export const SetAdminAction = () => ({
  type: "SET_ADMIN",
  payload: "",
});
