import React from 'react'
import { Helmet } from 'react-helmet-async'
import { UserLayout } from '../../layouts'

export const SignIn: React.FC = () => {
  return (
    <UserLayout>
      <Helmet>
        <title>用户登录</title>
      </Helmet>
    </UserLayout>
  )
}
