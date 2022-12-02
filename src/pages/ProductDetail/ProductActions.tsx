import { ShoppingCartOutlined } from '@ant-design/icons'
import { Button, Card, Col, DatePicker, Row, Space } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from '../../hooks'

export const ProductActions: React.FC = () => {
  const navigate = useNavigate()
  const jwt = useSelector(s => s.account.token)
  return (
    <Card>
      <Row gutter={[0, 16]}>
        <Col span={24}>
          <DatePicker.RangePicker size="large" />
        </Col>
        <Col span={24}>
          <Space>
            <Button
              type="primary"
              danger
              icon={<ShoppingCartOutlined />}
              onClick={() => {
                if (!jwt) {
                  navigate('/signin')
                }
              }}
            >
              加入购物车
            </Button>
          </Space>
        </Col>
      </Row>
    </Card>
  )
}
