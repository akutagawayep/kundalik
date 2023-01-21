import React from "react";
import { useState } from "react";
import { render } from "react-dom";
import { useDispatch } from "react-redux";
import {NavLink, useNavigate} from "react-router-dom"
import { logout } from "../../redux/actions";
import { ACCOUNT_ROUTE, ADMIN_ROUTE, HOMEWORKS_ROUTE, USERS_ROUTE } from "../../utils/consts";
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

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutFn = () => {
    localStorage.removeItem("token")
    dispatch(logout())
    navigate("/main")
    window.location.reload()
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
          <NavLink to={ACCOUNT_ROUTE} className={s.item}>
            Мой профиль
          </NavLink>
          <NavLink to={HOMEWORKS_ROUTE} className={s.item}>
            Домашние задания
          </NavLink>
          <NavLink to={USERS_ROUTE} className={s.item}>
            Пользователи
          </NavLink>
          <NavLink to={ADMIN_ROUTE} className={s.item}>
            Создать домашку
          </NavLink>
          <a onClick={logoutFn} className={s.btn}>
            Выйти
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
