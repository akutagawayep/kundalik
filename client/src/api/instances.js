import axios from "axios";

export const authInstance = axios.create({
  baseURL: "http://localhost:5000/auth/",
});

export const homeworksInstance = axios.create({
  baseURL: "http://localhost:5000/homeworks/",
  headers:{
    
  }
});
