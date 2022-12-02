import { Button, Col, Form, Input, Row, Space, Typography } from 'antd'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { UserLayout } from '../../layouts'

export const Register: React.FC = () => {
  return (
    <UserLayout>
      <Helmet>
        <title>用户注册</title>
      </Helmet>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 64,
        }}
      >
        <Form
          name="signUp"
          autoComplete="off"
          onFinish={obj => {
            console.log(obj)
          }}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: '* 邮箱不能为空',
              },
              {
                type: 'email',
                message: '* 邮箱格式不正确',
              },
            ]}
          >
            <Space direction="vertical" size={2}>
              <label htmlFor="email">
                <Typography.Title level={5} style={{ margin: 0 }}>
                  邮箱
                </Typography.Title>
              </label>
              <Input id="email" style={{ width: 240 }} />
            </Space>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '* 密码不能为空',
              },
            ]}
          >
            <Space direction="vertical" size={2}>
              <label htmlFor="password">
                <Typography.Title level={5} style={{ margin: 0 }}>
                  密码
                </Typography.Title>
              </label>
              <Input.Password id="password" style={{ width: 240 }} />
            </Space>
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: '* 确认密码不能为空',
              },
              ({ getFieldValue }) => ({
                validator(_rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject('* 确认密码不一致')
                },
              }),
            ]}
          >
            <Space direction="vertical" size={2}>
              <label htmlFor="confirmPassword">
                <Typography.Title level={5} style={{ margin: 0 }}>
                  确认密码
                </Typography.Title>
              </label>
              <Input.Password id="confirmPassword" style={{ width: 240 }} />
            </Space>
          </Form.Item>
          <Form.Item style={{ paddingTop: 16 }}>
            <Button
              htmlType="submit"
              type="primary"
              size="large"
              style={{ width: 240 }}
            >
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    </UserLayout>
  )
}
