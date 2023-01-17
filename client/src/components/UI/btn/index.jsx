import React from 'react'
import s from "./btn.module.scss"

const Btn = (props) => {
  return (
    <button className={s.root} style={props.bg} onClick={props.onclick}>{props.text}</button>
  )
}

export default Btn