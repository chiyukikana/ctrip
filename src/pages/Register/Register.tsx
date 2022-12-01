import { Button, Col, Input, Row, Space, Typography } from 'antd'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { UserLayout } from '../../layouts'

export const Register: React.FC = () => {
  return (
    <UserLayout>
      <Helmet>
        <title>用户注册</title>
      </Helmet>
      <Row style={{ paddingTop: 64 }} gutter={[0, 16]}>
        <Col span={24}>
          <Row align="middle" justify="center">
            <Space>
              <Col>
                <Typography.Text strong>邮箱</Typography.Text>
              </Col>
              <Col>
                <Input style={{ width: 200 }} />
              </Col>
            </Space>
          </Row>
        </Col>
        <Col span={24}>
          <Row align="middle" justify="center">
            <Space>
              <Col>
                <Typography.Text strong>密码</Typography.Text>
              </Col>
              <Col>
                <Input.Password style={{ width: 200 }} />
              </Col>
            </Space>
          </Row>
        </Col>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Button type="primary">注册</Button>
        </Col>
      </Row>
    </UserLayout>
  )
}
