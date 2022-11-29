import React from 'react'
import { Layout, Typography } from 'antd'

const { Footer: AntdFooter } = Layout

export const Footer: React.FC = () => {
  return (
    <AntdFooter style={{ textAlign: 'center' }}>
      <Typography.Text>Copyright Copyright Copyright</Typography.Text>
    </AntdFooter>
  )
}
