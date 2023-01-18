import React from 'react'
import Sidebar from '../../components/sidebar'
import s from "./authorizedPage.module.scss"
import ProfileRouter from '../../routes/profileRouter'

const AuthorizedPage = () => {
  return (
    <div className={s.root}>
        <Sidebar/>
        <ProfileRouter/>
    </div>
  )
}

export default AuthorizedPage