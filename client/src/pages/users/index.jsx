import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authInstance } from "../../api/instances";

import Avatar from "./avatar";
import s from "./usersPage.module.scss";
import {
  fetchedUsers,
  fetchingUsers,
  fetchingError,
} from "../../redux/reducers/userReducer/userActions";
import Loader from "../../components/UI/loader";

const UsersPage = () => {
  const users = useSelector((state) => state.user.users);
  const loaderState = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();

  const getUsers = async () => {
    dispatch(fetchingUsers());
    try {
      const response = await authInstance.get("users");
      console.log(users);
      dispatch(fetchedUsers(response.data));
    } catch (e) {
      dispatch(fetchingError());
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // useEffect(() => {
  //   console.log(users);
  // }, [users]);

  if (loaderState === "loading")
    return (
      <div className={s.loader}>
        <Loader />
      </div>
    );
  if (loaderState === "error")
    return <h1 style={{ textAlign: "center" }}>ERROR...</h1>;

  return (
    <div className={s.root}>
      <h1>Пользователи</h1>
      <div className={s.users}>
        {users.map((el) => (
          <Avatar name={el.username} role={el.roles} key={el.username} />
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
