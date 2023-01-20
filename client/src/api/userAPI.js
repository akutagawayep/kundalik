import { authHost, homeworksInstance, host } from "./instances";
import jwt_decode from "jwt-decode";
import { authInstance } from "./instances";

export const registrationFn = async (username, password, roles = "USER") => {
  const { data } = await authInstance.post("/registration", {
    username,
    password,
    roles,
  });
  return jwt_decode(data.token);
};

export const loginFn = async (username, password) => {
  const { data } = await authInstance.post("/login", { username, password });
  return jwt_decode(data.token);
};

export const check = async () => {
  const { data } = await authInstance.post("/check");
  return jwt_decode(data.token);
};

export const addHomework = async (title, body) => {
  const response = await homeworksInstance.post("/post", {title, body})
  return response
}
