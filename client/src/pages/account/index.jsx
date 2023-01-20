import React from 'react'
import s from "./accountPage.module.scss"
import profileImg from "../../assets/img/profileImg.png"

const AccountPage = () => {
  return (
    <div className={s.root}>
      <img src={profileImg} alt="" />
      <div className={s.block}>
        <p className={s.name}>Sandrina</p>
        <p className={s.role}>Uchenik</p>
      </div>
    </div>
  )
}

export default AccountPage