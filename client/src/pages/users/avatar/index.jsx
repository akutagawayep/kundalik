import React from "react";
import s from "./avatar.module.scss";
import avatar from "../../../assets/img/avatar.jpeg";

const Avatar = ({ name, role, ...props }) => {
  return (
    <div className={s.root}>
      <img src={avatar} alt="" />
      <p className={s.name}>{name}</p>
      <p className={s.role}>{role}</p>
    </div>
  );
};

export default Avatar;
