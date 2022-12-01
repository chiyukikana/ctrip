import React from 'react'
import {
  List,
  Tag,
  Typography,
  Card,
  Row,
  Col,
  Divider,
  Space,
  Rate,
} from 'antd'
import { LikeOutlined, DislikeOutlined, StarOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

interface PropsType {
  products: any[]
  paging?: any
  onPageChange?: (nextPage, pageSize) => void
}

const OriginalPrice: React.FC<{ value: string | number }> = ({ value }) => (
  <Row align="bottom">
    <Col>
      <Typography.Title
        style={{ marginBottom: 0, marginRight: 2 }}
        level={5}
        delete
      >
        ¥
      </Typography.Title>
    </Col>
    <Col>
      <Typography.Title style={{ margin: 0 }} level={5} delete>
        {value}
      </Typography.Title>
    </Col>
  </Row>
)

const Price: React.FC<{ value: string | number }> = ({ value }) => (
  <Row align="bottom">
    <Col>
      <Typography.Title
        style={{ marginBottom: 0, marginRight: 2 }}
        level={5}
        type="danger"
      >
        ¥
      </Typography.Title>
    </Col>
    <Col>
      <Typography.Title style={{ margin: 0 }} type="danger" level={4}>
        {value}
      </Typography.Title>
    </Col>
  </Row>
)

export const ProductList: React.FC<PropsType> = ({
  products,
  paging,
  onPageChange,
}) => {
  const navigate = useNavigate()
  const productList = products.map(p => ({
    id: p.id,
    title: p.title,
    description: p.description,
    tags: (
      <>
        {p.departureCity && <Tag color="volcano">立即出发</Tag>}
        {p.travelDays && <Tag color="geekblue">{p.travelDays}天</Tag>}
        {p.discountPresent && <Tag color="green">超低折扣</Tag>}
        {p.tripType && <Tag color="cyan">{p.tripType}</Tag>}
      </>
    ),
    imgSrc: p.touristRoutePictures[1].url,
    price: p.price,
    originalPrice: p.originalPrice,
    discountPresent: p.discountPresent,
    rating: p.rating,
  }))
  return (
    <>
      <Divider orientation="left">
        <Typography.Title level={3} style={{ margin: 0 }}>
          搜索结果
        </Typography.Title>
      </Divider>
      <List
        itemLayout="vertical"
        pagination={
          paging
            ? {
                current: paging.currentPage,
                onChange: page =>
                  onPageChange && onPageChange(page, paging.pageSize),
                pageSize: paging.pageSize,
                total: paging.totalCount,
              }
            : false
        }
        footer={
          paging && (
            <Typography.Title level={5}>
              已搜索到{paging.totalCount}条路线
            </Typography.Title>
          )
        }
      >
        <Row gutter={[0, 16]}>
          {productList.map(item => {
            return (
              <Col span={24} key={item.title}>
                <Card hoverable onClick={() => navigate(`/detail/${item.id}`)}>
                  <List.Item
                    style={{ padding: 0 }}
                    actions={[
                      <Space size={4}>
                        <StarOutlined />
                        {Math.floor(11 + Math.random() * 1000)}
                      </Space>,
                      <Space size={4}>
                        <LikeOutlined />
                        {Math.floor(11 + Math.random() * 1000)}
                      </Space>,
                      <Space size={4}>
                        <DislikeOutlined />
                        {Math.floor(11 + Math.random() * 1000)}
                      </Space>,
                    ]}
                    extra={
                      <img width={272} height="100%" alt="" src={item.imgSrc} />
                    }
                  >
                    <List.Item.Meta
                      title={item.title}
                      description={
                        <Row gutter={[0, 8]}>
                          <Col span={24}>
                            {item.discountPresent ? (
                              <Space align="end">
                                <OriginalPrice value={item.originalPrice} />
                                <Price value={item.price} />
                              </Space>
                            ) : (
                              <Price value={item.originalPrice} />
                            )}
                          </Col>
                          <Col span={24}>
                            <Typography.Text style={{ display: 'block' }}>
                              {item.description}
                            </Typography.Text>
                          </Col>
                          <Col span={24}>
                            <Rate disabled value={item.rating} allowHalf />
                          </Col>
                          <Col span={24}>{item.tags}</Col>
                        </Row>
                      }
                    />
                  </List.Item>
                </Card>
              </Col>
            )
          })}
        </Row>
      </List>
    </>
  )
}
