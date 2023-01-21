import React from "react";
import s from "./card.module.scss";

const Card = (props) => {
  return (
    <div className={s.root}>
      <img src={props.img} alt="none" />
      <div className={s.container}>
        <h3>{props.name}</h3>
        <p>{props.post}</p>
      </div>
    </div>
  );
};

export default Card;
