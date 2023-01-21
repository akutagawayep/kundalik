import React from 'react'
import { NavLink } from 'react-router-dom'
import s from "./btn.module.scss"

const Btn = ({to, children}) => {
  return (
    <NavLink to={to} className={s.root} >{children}</NavLink>
  )
}

export default Btn