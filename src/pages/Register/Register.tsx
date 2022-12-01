import React from 'react'
import { Helmet } from 'react-helmet-async'
import { UserLayout } from '../../layouts'

export const Register: React.FC = () => {
  return (
    <UserLayout>
      <Helmet>
        <title>用户注册</title>
      </Helmet>
    </UserLayout>
  )
}
