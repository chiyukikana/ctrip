import { App, Button, Form, Input, Space, Typography } from 'antd'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from '../../hooks'
import { UserLayout } from '../../layouts'
import axios from '../../lib/axios'
import { signIn } from '../../redux/account/slice'

export const Register: React.FC = () => {
  const { message } = App.useApp()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const jwt = useSelector(s => s.account.token)
  const onFinish = async ({ email, password, confirmPassword }) => {
    try {
      await axios.post('/auth/register', {
        email,
        password,
        confirmPassword,
      })
      message.success('账户注册成功')
      // 注册成功后自动登录
      dispatch(signIn({ email, password }))
    } catch (error) {
      message.error('账户注册失败')
    }
  }
  // 副作用钩子，注册成功后判断是否登录成功，如果成功则返回首页
  useEffect(() => {
    if (jwt) {
      message.success('登录成功')
      navigate('/')
    }
  }, [jwt])
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
        <Form name="signUp" autoComplete="off" onFinish={onFinish}>
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
          <Form.Item
            name="confirmPassword"
            hasFeedback
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
