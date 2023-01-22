import React from "react";
import { useState } from "react";
import { loginFn, registrationFn } from "../../api/userAPI";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import s from "./registrationPage.module.scss";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../../utils/consts";
import Inpt from "../../components/UI/input";
import { useDispatch } from "react-redux";
import { addUser, login } from "../../redux/actions";

const RegistartionPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;

  const [user, setUser] = useState({ username: "", password: "" });

  const dispatch = useDispatch();

  const signIn = async () => {
    try {
      let data;
      if (isLogin) {
        data = await loginFn(user.username, user.password);
        dispatch(login(data));
        window.location.reload();
        navigate("/profile");
      } else {
        data = await registrationFn(user.username, user.password);
        dispatch(addUser(user));
        dispatch(login(data));
        window.location.reload();
        navigate("/profile");
      }
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className={s.root}>
      {isLogin && <div className={s.block}></div>}
      <form>
        <h2>{isLogin ? "Авторизуйся" : "Зарегистрируйся"}</h2>
        <Inpt
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="Ваше имя пользователя"
        />
        <Inpt
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Ваш пароль"
        />
        <div className={s.btns}>
          {isLogin ? (
            <div>
              Нет аккаунта?
              <NavLink to={REGISTRATION_ROUTE}>
                {" "}
                Зарегистрироваться!
              </NavLink>{" "}
            </div>
          ) : (
            <div>
              Есть аккаунт?
              <NavLink to={LOGIN_ROUTE}> Войти!</NavLink>
            </div>
          )}
          <a className={s.regBtn} onClick={signIn}>
            {isLogin ? "Войти" : "Регистрация"}
          </a>
        </div>
      </form>
      {!isLogin && <div className={s.block}></div>}
    </div>
  );
};

export default RegistartionPage;
