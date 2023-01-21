import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { homeworksInstance } from "../../api/instances";
import Loader from "../../components/UI/loader";
import {
  fetchedPosts,
  fetchingError,
  fetchingPosts,
} from "../../redux/reducers/postsReducers/postsAction";
import CardItem from "./card";
import s from "./postsPage.module.scss";

const PostsPage = () => {
  const posts = useSelector((state) => state.posts.posts);
  const loaderState = useSelector((state) => state.posts.loading);
  const dispatch = useDispatch();

  const getPosts = async () => {
    dispatch(fetchingPosts());
    try {
      const response = await homeworksInstance.get("/");
      dispatch(fetchedPosts(response.data));
    } catch (e) {
      dispatch(fetchingError());
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (loaderState === "loading")
    return (
      <div className={s.loader}>
        <Loader />
      </div>
    );
  if (loaderState === "error")
    return <h1 style={{ textAlign: "center" }}>ERROR...</h1>;

  return (
    <div className={s.root}>
      <h1>Все домашние задания</h1>
      <div className={s.posts}>{posts.map(({title, body, id}) => <CardItem title={title} body={body} key={id} />)}</div>
    </div>
  );
};

export default PostsPage;
