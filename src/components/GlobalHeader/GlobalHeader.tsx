import { GithubOutlined, UserOutlined } from '@ant-design/icons'
import { Layout, Button, Row, Col, Input, Space } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useMessage, useSelector } from '../../hooks'
import { accountSlice } from '../../redux/account/slice'
import jwtDecode, { JwtPayload } from 'jwt-decode'

const { Header } = Layout
const { Search } = Input

export const GlobalHeader: React.FC = () => {
  const navigate = useNavigate()
  const jwt = useSelector(s => s.account.token)
  const dispatch = useDispatch()
  const messageApi = useMessage()
  return (
    <Header
      style={{
        backgroundColor: '#fff',
        boxShadow:
          '0 1px 2px 0 rgb(0 0 0 / 3%), 0 1px 6px -1px rgb(0 0 0 / 2%), 0 2px 4px 0 rgb(0 0 0 / 2%)',
      }}
    >
      <Row>
        <Col span={12}>
          <Row>
            <Col span={12}>
              <Link to="/">
                <img
                  draggable={false}
                  style={{
                    width: 194,
                    height: 32,
                  }}
                  src="https://webresource.c-ctrip.com/ares2/nfes/pc-home/1.0.65/default/image/logo.png"
                  alt=""
                />
              </Link>
            </Col>
            <Col
              span={12}
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Search
                placeholder="搜索旅游目的地/主题/关键字..."
                onSearch={keywords => navigate(`/search/${keywords}`)}
                enterButton
              />
            </Col>
          </Row>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Space>
            {jwt ? (
              <>
                <Button icon={<UserOutlined />}>
                  {jwtDecode<JwtPayload & { username: string }>(jwt).username}
                </Button>
                <Button
                  onClick={() => {
                    dispatch(accountSlice.actions.signOut())
                    messageApi.warning('您已注销！')
                  }}
                >
                  注销
                </Button>
              </>
            ) : (
              <Button.Group>
                <Button onClick={() => navigate('/register')}>注册</Button>
                <Button onClick={() => navigate('/signin')}>登录</Button>
              </Button.Group>
            )}
            <Button
              icon={<GithubOutlined />}
              href="https://github.com/chiyukikana/ctrip"
              target="_blank"
            ></Button>
          </Space>
        </Col>
      </Row>
    </Header>
  )
}
