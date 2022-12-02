import { Button, Form, Input, Space, Typography, message } from 'antd'
import React, { useEffect } from 'react'
import { signIn } from '../../redux/account/slice'
import { Helmet } from 'react-helmet-async'
import { useDispatch, useMessage, useSelector } from '../../hooks'
import { UserLayout } from '../../layouts'
import { useNavigate } from 'react-router-dom'

export const SignIn: React.FC = () => {
  const loading = useSelector(s => s.account.loading)
  const jwt = useSelector(s => s.account.token)
  const error = useSelector(s => s.account.error)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const messageApi = useMessage()
  const onFinish = ({ email, password }) => {
    dispatch(signIn({ email, password }))
  }
  // 登录成功
  useEffect(() => {
    if (jwt) {
      messageApi.success('登录成功')
      navigate('/')
    }
  }, [jwt])
  // 登录失败
  useEffect(() => {
    error && messageApi.error('邮箱或密码错误')
  }, [error])
  return (
    <UserLayout>
      <Helmet>
        <title>用户登录</title>
      </Helmet>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 64,
        }}
      >
        <Form name="signIn" autoComplete="off" onFinish={onFinish}>
          <Form.Item
            name="email"
            hasFeedback
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
            hasFeedback
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
          <Form.Item style={{ paddingTop: 16 }}>
            <Button
              loading={loading}
              htmlType="submit"
              type="primary"
              size="large"
              style={{ width: 240 }}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </UserLayout>
  )
}
