import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addHomework } from "../../api/userAPI";
import { addPost } from "../../redux/actions";
import s from "./adminPage.module.scss";

const AdminPage = () => {

  const [post, setPost] = useState({title: "", body: ""})
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const adding = async (e) => {
    e.preventDefault();
    dispatch(addPost(post))
    try{
      const homework = await addHomework(post.title, post.body)
      navigate("/homeworks")
    }catch(e){
      alert(e.response.data.message)
    }
  }

  return (
    <div className={s.root}>
      <form>
        <h2>Создать новое <br /> домашнее задание</h2>
        <input placeholder="Заглавие" value={post.title} onChange={e => setPost({...post, title: e.target.value})} />
        <textarea placeholder="Описание задания" value={post.body} onChange={e => setPost({...post, body: e.target.value})}/>
        <a className={s.btn}onClick={adding} >Создать</a>
        <p>*Редактирование поста после его создания будет невозможным*</p>
      </form>
    </div>
  );
};

export default AdminPage;
