import React, { PropsWithChildren } from 'react'
import { Layout } from 'antd'
import { GlobalHeader } from '../../components'

export const UserLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout
      style={{
        backgroundColor: '#fff',
      }}
    >
      <GlobalHeader />
      <Layout.Content
        style={{
          padding: '0 50px',
          margin: '16px 0',
        }}
      >
        {children}
      </Layout.Content>
    </Layout>
  )
}
