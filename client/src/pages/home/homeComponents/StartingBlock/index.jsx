import React from "react";
import s from "./startingBlock.module.scss";

const StartingBlock = (props) => {
  return (
    <div className={s.root} style={props.style}>
      <div className={s.container}>
        <h1 className={s.title}>{props.title}</h1>
        <p className={s.text}>{props.text}</p>
    {props.btn}
      </div>
      <div className={s.imgContainer} style={props.contStyle}>
      <img src={props.img} alt="none" style={props.imgStyle}/></div>
    </div>
  );
};

export default StartingBlock;
