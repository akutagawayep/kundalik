import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { homeworksInstance } from '../../api/instances';
// import { fetchedPosts, fetching, fetchingError } from '../../redux/actions';
import CardItem from './card'
import s from "./postsPage.module.scss"

const PostsPage = () => {

  const posts = useSelector((state) => state.posts);
  const loaderState = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const getUsers = async () => {
    // dispatch(fetching());
    try {
      const response = await axios.get("http://localhost:5000/homeworks");
      // dispatch(fetchedPosts(response.data));
    } catch (e) {
      // dispatch(fetchingError()); 
    }
  };

  // useEffect(() => {
  //   getUsers();
  // }, []);

  if (loaderState === "loading") return <h1>Loading...</h1>;
  if (loaderState === "error") return <h1>ERROR...</h1>;

  return (
    <div className={s.root}>
      <h1>Все домашние задания</h1>
      <div className={s.posts}>{posts.map(({title, body, id}) => <CardItem title={title} body={body} key={id} />)}</div>
    </div>
  )
}

export default PostsPage