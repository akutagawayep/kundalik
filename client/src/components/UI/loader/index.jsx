import React from 'react'
import s from "./loader.module.scss"
import loaderImg from "../../../assets/img/loader.svg"

const Loader = () => {
  return (
    <img src={loaderImg} alt=""  className={s.root}/>
  )
}

export default Loader