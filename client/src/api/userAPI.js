import { authHost, homeworksInstance, host } from "./instances";
import jwt_decode from "jwt-decode";
import { authInstance } from "./instances";

export const registrationFn = async (username, password, roles = "USER") => {
  const { data } = await authInstance.post("/registration", {
    username,
    password,
    roles,
  });
  localStorage.setItem("token", data.token)
  return jwt_decode(data.token);
};

export const loginFn = async (username, password) => {
  const { data } = await authInstance.post("/login", { username, password });
  localStorage.setItem("token", data.token)
  return jwt_decode(data.token);
};

export const check = async () => {
  const { data } = await authHost.get("/check");
  localStorage.setItem("token", data.token)
  return jwt_decode(data.token);
};

export const addHomework = async (title, body) => {
  const response = await homeworksInstance.post("/post", { title, body });
  return response;
};

export const addUserHomework = async ({link, homework, whose}) => {
  const response = await homeworksInstance.post("/send", { link, homework, whose});
  return response;
};
