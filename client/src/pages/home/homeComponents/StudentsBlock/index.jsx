import React from "react";
import s from "./students.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./Slide/index";
import sumMen from "../StartingBlock/img/sumMen.png";
import './slider.scss'

const Students = () => {
  var settings = {
    draggable: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // prevArrow:"->"
  };
  return (
    <div className={s.root}>
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
  );
};

export default Students;
