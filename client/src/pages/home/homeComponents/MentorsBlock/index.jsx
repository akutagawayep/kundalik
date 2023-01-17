import React from "react";
import Card from "./Card";
import s from "./mentors.module.scss";
import whiteMan from "./img/whiteMan.png";

const Mentors = () => {
  return (
    <div className={s.root}>
      <h1>Our mentors</h1>
      <div className={s.container}>
        <Card img={whiteMan} name="Tafhim Hasan" post="Web Developer" />
        <Card img={whiteMan} name="Tafhim Hasan" post="Web Developer" />
        <Card img={whiteMan} name="Tafhim Hasan" post="Web Developer" />
        <Card img={whiteMan} name="Tafhim Hasan" post="Web Developer" />
      </div>
    </div>
  );
};

export default Mentors;
