import React from "react";
import { useState } from "react";
import {NavLink} from "react-router-dom"
import s from "./sidebar.module.scss";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const classes = [`${s.navBar}`];
  const classesIcon = [`${s.icon}`]

  const open = () => {
    setIsOpen(!isOpen);
  };

  if (isOpen) {
    classes.push(`${s.open}`);
    classesIcon.push(`${s.close}`)
  }

  return (
    <div className={s.root} >
      <div className={s.icon} onClick={open}>
        <span></span>
      </div>
      <div className={classes.join(" ")} onClick={open}>
        <nav className={s.inner} onClick={e => e.preventDefault()}>
        <div className={classesIcon.join(" ")} onClick={open}>
        <span></span>
      </div>
          <NavLink to="/home" className={s.item}>
            Мой профиль
          </NavLink>
          <NavLink to="/homeworks" className={s.item}>
            Домашние задания
          </NavLink>
          <NavLink to="/users" className={s.item}>
            Пользователи
          </NavLink>
          <NavLink to="/main" className={s.item}>
            Домой
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
