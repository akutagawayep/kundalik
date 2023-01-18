import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import HomePage from '../../pages/home'
import AccountPage from '../../pages/account'
import PostsPage from '../../pages/posts'
import UsersPage from '../../pages/users'

const ProfileRouter = () => {
  return (
    <Routes>
    <Route path="/home" element={<AccountPage />} />
    <Route path="/homeworks" element={<PostsPage />} />
    <Route path="/users" element={<UsersPage />} />
    <Route path="/main" element={<HomePage />} />
  </Routes>
  )
}

export default ProfileRouter