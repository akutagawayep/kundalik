import React from 'react'
import s from "./card.module.scss"

const CardItem = ({title, body, ...props}) => {
  return (
    <div className={s.root}>
        <span></span>
        <div className={s.title}>{title}</div>
        <div className={s.body}>{body}</div>
        <button>Open</button>
    </div>
  )
}

export default CardItem