import React from "react";
import s from "./students.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./Slide/index";
import sumMen from "../StartingBlock/img/sumMen.png";
import "./slider.scss";

const Students = () => {
  
  const number = (e) => {
    if (e > 1400) {
      return 3;
    } else if (e > 1200) {
      return 2;
    } else return 1;
  };
 let  amount = number(window.innerWidth);

  var settings = {
    draggable: true,
    infinite: true,
    speed: 500,
    slidesToShow: amount,
    slidesToScroll: 1,
  };
  return (
    <div className={s.root}>
      <h2>Students review</h2>
      <div className={s.container}>
        <Slider {...settings}>
          <Slide
            name="Nasir jamshed"
            img={sumMen}
            text="A skill is the learned ability to perform 
an action with determined results with 
Execution often Within given amount "
          />
          <Slide
            name="Nasir jamshed"
            img={sumMen}
            text="A skill is the learned ability to perform 
an action with determined results with 
Execution often Within given amount "
          />
          <Slide
            name="Nasir jamshed"
            img={sumMen}
            text="A skill is the learned ability to perform 
an action with determined results with 
Execution often Within given amount "
          />
          <Slide
            name="Nasir jamshed"
            img={sumMen}
            text="A skill is the learned ability to perform 
an action with determined results with 
Execution often Within given amount "
          />
        </Slider>
      </div>
    </div>
  );
};

export default Students;
