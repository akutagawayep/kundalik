import React, { useState } from "react";
import s from "./avatar.module.scss";
import avatar from "../../../assets/img/avatar.jpeg";
import { useNavigate } from "react-router-dom";

const Avatar = ({ name, role, ...props }) => {
  const [roleUser, setRoleUser] = useState(false)

  const navigate = useNavigate()

  return (
    <div className={s.root}>
      <img src={avatar} alt="" className={s.imgUser} onClick={() => navigate(`/users/${name}`)}/>
      <p className={s.name}>{name}</p>
      <p className={s.role}>{role == "USER" ? "Ученик" : "Учитель"}</p>
    </div>
  );
};

export default Avatar;
