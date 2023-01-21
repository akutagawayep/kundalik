import React from "react";
import s from "./accountPage.module.scss";
import profileImg from "../../assets/img/profileImg.png";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";

const AccountPage = () => {
  const token = localStorage.getItem("token");
  const newUser = jwt_decode(token);


  return (
    <div className={s.root}>
      <img src={profileImg} alt="" />
      <div className={s.block}>
        <p className={s.name}>{newUser.username}</p>
        <p className={s.role}>
          {newUser.roles[0] === "USER" ? "Ученик" : "Учитель"}
        </p>
      </div>
    </div>
  );
};

export default AccountPage;
