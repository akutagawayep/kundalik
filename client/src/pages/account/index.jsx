import React, { useEffect, useState } from "react";
import s from "./accountPage.module.scss";
import profileImg from "../../assets/img/profileImg.png";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { homeworksInstance } from "../../api/instances";
import Card from "./card";
import Loader from "../../components/UI/loader";

const AccountPage = () => {
  const token = localStorage.getItem("token");
  const newUser = jwt_decode(token);

  const [homeworks, setHomeworks] = useState([]);
  const [loadering, setLoader] = useState(false);
  const [query, setQuery] = useState("");

  const getHomeworks = async () => {
    setLoader(true);
    const res = await homeworksInstance.get("/students");
    setHomeworks(res.data);
    setLoader(false);
  };

  useEffect(() => {
    getHomeworks();
  }, []);

  const filterFn = () => {
    return homeworks.filter((el) => el.whose == newUser.username);
  };

  const filtering = () => {
    return filterFn().length !== 0 ? (
      <div>
        {" "}
        <h3 style={{ marginBottom: 10 }}>Сданные домашки:</h3>{" "}
        <div className={s.hws}>
          {filterFn().map((el, i) => (
            <Card
              homework={el.homework}
              link={el.link}
              score={el.score}
              key={i}
            />
          ))}
        </div>
      </div>
    ) : (
      <h3 style={{ marginBottom: 10 }}>У вас пока что нет сданных работ</h3>
    );
  };

  return (
    <div className={s.root}>
      <div className={s.inf}>
        <img src={profileImg} alt="" />
        <div className={s.block}>
          <p className={s.name}>{newUser.username}</p>
          <p className={s.role}>
            {newUser.roles[0] === "USER" ? "Ученик" : "Учитель"}
          </p>
        </div>
      </div>
      {loadering ? <Loader /> : filtering()}
    </div>
  );
};

export default AccountPage;
