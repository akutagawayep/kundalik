import axios from "axios";
const URL = "http://localhost:5000/";

const host = axios.create({
  baseURL: URL,
});

const authHost = axios.create({
  baseURL: URL,
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

authHost.interceptors.request.use(authInterceptor);

export { host, authHost };

export const authInstance = axios.create({
  baseURL: "http://localhost:5000/auth",
});

export const homeworksInstance = axios.create({
  baseURL: "http://localhost:5000/homeworks",
});
