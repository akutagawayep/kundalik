import jwtDecode from "jwt-decode";
import React, { useEffect } from "react";
import { useState } from "react";
import { render } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions";
import {
  ACCOUNT_ROUTE,
  ADMIN_ROUTE,
  GRADE_ROUTE,
  HOMEWORKS_ROUTE,
  USERS_ROUTE,
} from "../../utils/consts";
import s from "./sidebar.module.scss";

const Sidebar = () => {
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  const [isOpen, setIsOpen] = useState(false);

  const classes = [`${s.navBar}`];
  const classesIcon = [`${s.icon}`];

  const open = () => {
    setIsOpen(!isOpen);
  };

  if (isOpen) {
    classes.push(`${s.open}`);
    classesIcon.push(`${s.close}`);
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutFn = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    navigate("/main");
    window.location.reload();
  };

  const user = jwtDecode(localStorage.getItem("token"));

  useEffect(() => {
    if(user.roles[0] === "ADMIN") dispatch({ type: "SET_ADMIN"});
  }, []);



  return (
    <div className={s.root}>
      <div className={s.icon} onClick={open}>
        <span></span>
      </div>
      <div className={classes.join(" ")} onClick={open}>
        <nav className={s.inner} onClick={(e) => e.preventDefault()}>
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
          {isAdmin && (
            <div style={{display: "flex", flexDirection: "column", gap: 20}}>
              <NavLink to={ADMIN_ROUTE} className={s.item}>
                Создать домашку
              </NavLink>
              <NavLink to={GRADE_ROUTE} className={s.item}>
                Оценить домашкy
              </NavLink>
            </div>
          )}
          <a onClick={logoutFn} className={s.btn}>
            Выйти
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
