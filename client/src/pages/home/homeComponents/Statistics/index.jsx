import React from "react";
import s from "./statistics.module.scss";
const Statistics = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <p className={s.num}>33k+</p>
        Students
      </div>
      <div className={s.container}>
        <p className={s.num}>2k+</p>
        Reviews
      </div>
      <div className={s.container}>
        <p className={s.num}>150+</p>
        Mentors
      </div>
      <div className={s.container}>
        <p className={s.num}>620+</p>
        Courses
      </div>
      <div className={s.container}>
        <p className={s.num}>20k+</p>
        Lessons
      </div>
    </div>
  );
};

export default Statistics;
