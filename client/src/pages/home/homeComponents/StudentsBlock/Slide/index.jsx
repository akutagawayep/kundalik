import React from "react";
import s from "./slide.module.scss";

const Slide = (props) => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <img src={props.img} alt="none" /> <h3>{props.name}</h3>{" "}
      </div>
      <p>{props.text}</p>
    </div>
  );
};

export default Slide;
