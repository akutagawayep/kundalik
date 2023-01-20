import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authInstance } from "../../api/instances";
import s from "./homePage.module.scss";

const HomePage = () => {
  // const [users, setUsers] = useState([]);
  // const getUsers = async () => {
  //   const response = await  axios.get("http://localhost:5000/auth/users", {
  //     headers:{

  //     }
  //   })
  //   setUsers(response.data);
  // };
  // useEffect(() => {
  //   getUsers();
  // },[]);
  // useEffect(() => {
  //   console.log(users);
  // }, );

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logOut = () => {
    dispatch(logOut)
    navigate("/login")
  }

  return <div className={s.root}>
    <button onClick={logOut} >LogOut</button>
  </div>;
};

export default HomePage;
