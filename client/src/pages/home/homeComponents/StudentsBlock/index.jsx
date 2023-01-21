import React from "react";
import s from "./students.module.scss";
import Slider from "react-slick";
import Slide from "./Slide/index";
import sumMen from "../../../../assets/img/sumMen.png";
import "./slider.scss";

const Students = () => {
  //   const number = (e) => {
  //     if (e > 1400) {
  //       return 3;
  //     } else if (e > 1200) {
  //       return 2;
  //     } else return 1;
  //   };
  //  let  amount = number(window.innerWidth);

  var settings = {
    draggable: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div id="students" className={s.root}>
      <h2>Students review</h2>
      <div className={s.container}>
        <Slider {...settings}>
          {" "}
          <Slide
            name="Nasir jamshed"
            img={sumMen}
            text="A skill is the learned ability to perform 
an action with determined results with 
Execution often Within given amount "
          />{" "}
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
