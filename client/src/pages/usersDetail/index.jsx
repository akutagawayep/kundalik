import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchedUsers, fetching, fetchingError, userDetail } from '../../redux/actions'
import s from "./usersDetailPage.module.scss"

const UsersDetailPage = () => {

    // const params = useParams()
    // console.log(params.username);

    // const user = useSelector((state) => state.users);
    // // const loaderState = useSelector((state) => state.posts);
    // const dispatch = useDispatch();
  
    // const getUsers = async () => {
    //   dispatch(fetching());
    //   try {
    //     const response = await axios.get(`http://localhost:5000/auth/users/${params.username}`);
    //     dispatch(userDetail(response.data));
    //   } catch (e) {
    //     dispatch(fetchingError());
    //   }
    // };
  
    // useEffect(() => {
    //   getUsers();
    // }, []);

  return (
    // <div className={s.root}>{user.username}</div>
    <div></div>
  )
}

export default UsersDetailPage