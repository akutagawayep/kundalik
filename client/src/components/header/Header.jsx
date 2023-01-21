import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const classes = [`${s.navBar}`];

  const open = () => {
    setIsOpen(!isOpen);
  };

  if (isOpen) {
    classes.push(`${s.open}`);
  }

  return (
    <div className={s.root}>
      <div className={s.icon} onClick={open}>
        <span></span>
      </div>
      <div className={s.logo}>
      <NavLink to={"/login"} className={s.login}>Login</NavLink>
        <a href="#">
          <span>C</span>ommentarius
        </a>
      </div>
      <div className={classes.join(" ")} onClick={open}>
        <nav className={s.inner} onClick={(e) => e.preventDefault()}>
          <a className={s.item} href="#start">
            Start
          </a>
          <a className={s.item} href="#about">
            About us
          </a>
          <a className={s.item} href="#mentors">
            Our Mentors
          </a>
          <a className={s.item} href="#students">
            Our Students
          </a>
          <a className={s.item} href="#questions">
            Questions & Answers
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
