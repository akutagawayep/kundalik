import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { authInstance } from "../../api/instances";
import CardItem from "../posts/card";
import Avatar from "./avatar";
import s from "./usersPage.module.scss";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false)
  const getUsers = async () => {
    setLoading(true)
    const response = await axios.get("http://localhost:5000/auth/users");
    setUsers(response.data);
    setLoading(false)
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return <div className={s.root}>
      {loading ? <div>Loading....</div> : users.map(el => <Avatar name={el.username} role={el.roles} key={el.username}/>) }
  </div>;
};

export default UsersPage;
