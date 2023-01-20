import React from 'react'
import { NavLink } from 'react-router-dom'
import s from "./card.module.scss"

const CardItem = ({title, body, ...props}) => {
  return (
    <div className={s.root}>
        <span></span>
        <div className={s.title}>{title}</div>
        <div className={s.body}>{body}</div>
        <NavLink to={"/homeworks/:id"} className={s.btn}>Open</NavLink>
    </div>
  )
}

export default CardItem