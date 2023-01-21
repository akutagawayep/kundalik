import jwtDecode from "jwt-decode";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addUserHomework } from "../../../api/userAPI";
import s from "./card.module.scss";

const CardItem = ({ title, body, ...props }) => {
  // const user = useSelector((state) => state.auth.username);

  const user = jwtDecode(localStorage.getItem("token"));

  const addUserHW = async (link) => {
    console.log(title, link, user.username);

    const request = await addUserHomework({
      homework: title,
      link,
      whose: user.username,
    });

    console.log(request);
  };

  return (
    <div className={s.root}>
      <span></span>
      <div className={s.title}>{title}</div>
      <div className={s.body}>{body}</div>
      <a className={s.btn} onClick={() => addUserHW(prompt())}>
        Решить
      </a>
    </div>
  );
};

export default CardItem;
