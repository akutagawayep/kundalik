import React from "react";
import Question from "./Question";
import s from "./questions.module.scss";

const Questions = () => {
  return (
    <div id="questions" className={s.root}>
      <h2>Frequently Asked Questions</h2>
      <Question
        question="How to inroll course? "
        text="Our designers and engineers know collaboration is the  essence of any project It’s a simple 
        philosophy we followed  for nearly two decades philosophy we followed 
        for nearly two decades..."
      />
      <hr/>
      <Question
        question="How to inroll course? "
        text="Our designers and engineers know collaboration is the  essence of any project It’s a simple 
        philosophy we followed  for nearly two decades philosophy we followed 
        for nearly two decades..."
      />
      <hr/>
      <Question
        question="How to inroll course? "
        text="Our designers and engineers know collaboration is the  essence of any project It’s a simple 
        philosophy we followed  for nearly two decades philosophy we followed 
        for nearly two decades..."
      />
      <hr/>
      <Question
        question="How to inroll course? "
        text="Our designers and engineers know collaboration is the  essence of any project It’s a simple 
        philosophy we followed  for nearly two decades philosophy we followed 
        for nearly two decades..."
      />
  
      
    </div>
  );
};

export default Questions;
