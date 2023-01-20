import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { authInstance } from "../../api/instances";
import CardItem from "../posts/card";
import Avatar from "./avatar";
import s from "./usersPage.module.scss";
import { fetched, fetchedUsers, fetching, fetchingError } from "../../redux/actions";

const UsersPage = () => {

  const users = useSelector((state) => state.users);
  const loaderState = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const getUsers = async () => {
    dispatch(fetching());
    try {
      const response = await axios.get("http://localhost:5000/auth/users");
      dispatch(fetchedUsers(response.data));
    } catch (e) {
      dispatch(fetchingError());
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loaderState === "loading") return <h1>Loading...</h1>;
  if (loaderState === "error") return <h1>ERROR...</h1>;

  return (
    <div className={s.root}>
      <h1>Пользователи</h1>
      <div className={s.users}>{users.map(el => <Avatar name={el.username} role={el.roles} key={el.username}/>)}</div>
    </div>
  );
};

export default UsersPage;
