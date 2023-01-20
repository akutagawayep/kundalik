import React from "react";
import s from "./question.module.scss";

const Question = (props) => {
  return (
    <div className={s.root}>
      <h3> {props.question} </h3>
      <div className={s.container}>
        <div className={s.ans}>Ans</div>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Question;
