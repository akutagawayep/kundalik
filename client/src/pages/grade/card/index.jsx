import React from "react";
import s from "./card.module.scss";
import { useEffect } from "react";
import { homeworksInstance } from "../../../api/instances";
import { addUserHomework } from "../../../api/userAPI";

const CardItem = ({ whose, score, link, homework, id }) => {
  const grading = async (score) => {
    const request = await homeworksInstance.put("/grading", {
      id,
      whose,
      link,
      score,
      homework,
    });
    console.log(request);
    window.location.reload();
  };

  return (
    <div className={s.root}>
      <div className={s.inf}>
        <p className={s.title}>
          <span>Работа:</span> {whose}{" "}
        </p>
        <p className={s.link}>
          {" "}
          <span>Ответ:</span> {link}{" "}
        </p>
        <p className={s.score}>{score}</p>
      </div>
      <div className={s.btns}>
        <a onClick={() => grading(prompt())} className={s.btn}>
          Дать фидбэк
        </a>
      </div>
    </div>
  );
};

export default CardItem;
