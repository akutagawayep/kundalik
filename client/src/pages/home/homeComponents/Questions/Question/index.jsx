import React from 'react'
import s from './question'

const Question = (props) => {
  return (
    <div className={s.root}>
     <h3> {props.question} </h3> 
     <div className={s.ans}>Ans</div>
     <p>{props.text}</p>
    </div>
  )
}

export default Question