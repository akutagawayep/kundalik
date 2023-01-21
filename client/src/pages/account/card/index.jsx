import React from "react";
import s from "./card.module.scss";

const Card = ({ homework, link, score }) => {
  return (
    <div className={s.root}>
      <p>
        Домашка: <span>{homework}</span>
      </p>
      <p>
        Отправлено: <span>{link}</span>
      </p>
      <p className={s.score}>
        Оценка: <span>{score}</span>
      </p>
    </div>
  );
};

export default Card;
