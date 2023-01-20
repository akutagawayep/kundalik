import React from "react";
import s from "./postDetail.module.scss";

const PostDetailPage = () => {
  const click = (e) => {
    e.preventDefault();
  };

  return (
    <div className={s.root}>
      <span></span>
      <div className={s.title}>Title</div>
      <div className={s.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est similique
        ex neque vel voluptates sapiente! Optio, nostrum exercitationem
        asperiores quis cupiditate vitae ducimus nisi numquam accusantium esse
        dolorem eos impedit?
      </div>
      <form>
        <textarea type="text" placeholder="Ваше домашнее задание" />
        <a onClick={click}>Отправить</a>
      </form>
    </div>
  );
};

export default PostDetailPage;
