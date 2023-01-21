import React from "react";
import s from "./footer.module.scss";
import { IoMail, IoLogoLinkedin, IoLogoPython, IoCall } from "react-icons/io5";
import {
  FaInstagramSquare,
  FaAccessibleIcon,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={s.root}>
      <div className={s.abt}>
        <h2>Мы заебались</h2>
        <p>
          A skill is the learned ability to perform an action with determined
          results with Execution often Within given amount
        </p>
        <div className={s.logos}>
          <a href="">
            <IoLogoLinkedin />
          </a>
          <a href="">
            <IoLogoPython />
          </a>
          <a href="">
            <FaInstagramSquare />
          </a>
          <a href="">
            <FaAccessibleIcon />
          </a>
        </div>
      </div>
      <div className={s.links}>
        <h2>Полезные ссылки</h2>
        <a href="">FAQ’s</a>
        <a href="">Privacy Policy</a>
        <a href="">Term & Conditions</a>
        <a href="">Support</a>
      </div>
      <div className={s.contacts}>
        <h2>Свяжитесь с нами</h2>
        <div className={s.str}>
          <FaMapMarkerAlt />
          <p>Shekhertake8, mohammadpur, Dhaka.</p>
        </div>
        <div className={s.str}>
          <IoCall />
          <p>+880123456789</p>
        </div>

        <div className={s.str}>
          <IoMail /> <p>example@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
