import React, { useState } from "react";
import s from "./header.module.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = [s.container];

  const open = () => {
    setIsOpen(!isOpen);
  };

  if (isOpen) {
    classes.push(s.open);
  }
  return (
    <div className={s.root}>
      <div
        className={s.btn}
        onClick={() => {
          open();
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={classes.join(" ")}>
        <a href="#start">Start</a>
        <a href="#about">About us</a>
        <a href="#mentors">Our Mentors</a>
        <a href="#students">Our Students</a>
        <a href="#questions">Questions & Answers</a>
      </div>
    </div>
    // <div className=""></div>
  );
};

export default Header;
