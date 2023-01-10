import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { authInstance } from "../../api/instances";
import s from "./homePage.module.scss";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await  axios.get("http://localhost:5000/auth/users", {
      headers:{

      }
    })
    setUsers(response);
  };
  useEffect(() => {
    getUsers();
  },[]);
  useEffect(() => {
    console.log(users);
  }, );

  return <div className={s.root}>Home</div>;
};

export default HomePage;
