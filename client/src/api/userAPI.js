import { authHost, host } from "./instances";
import jwt_decode from "jwt-decode";

export const registrationFn = async (username, password, roles) => {
  const { data } = await host.post("auth/registration", {
    username,
    password,
    roles,
  });
  return jwt_decode(data.token);
};

export const loginFn = async (username, password) => {
  const { data } = await host.post("auth/login", { username, password });
  return jwt_decode(data.token);
};

export const check = async () => {
  const { data } = await host.post("auth/check");
  return jwt_decode(data.token);
};
