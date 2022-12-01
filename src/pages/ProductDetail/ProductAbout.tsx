import { Card, Col, Rate, Row, Space, Table, Typography } from 'antd'
import React from 'react'

interface PropsType {
  product: any
}

export const ProductAbout: React.FC<PropsType> = ({ product }) => {
  return (
    <Card>
      <Row gutter={[0, 16]}>
        <Col span={24}>
          <Typography.Title level={4}>{product.title}</Typography.Title>
          <Typography.Text type="secondary">
            {product.description}
          </Typography.Text>
        </Col>
        <Col span={24}>
          <Row align="bottom">
            <Col span={12}>
              <Row align="bottom">
                <Col>
                  <Typography.Title
                    style={{ marginBottom: 0, marginRight: 2 }}
                    level={2}
                    type="danger"
                  >
                    ¥
                  </Typography.Title>
                </Col>
                <Col>
                  <Typography.Title style={{ margin: 0 }} type="danger">
                    {product.originalPrice}
                  </Typography.Title>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Rate disabled allowHalf defaultValue={product.rating} />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Table
            size="small"
            pagination={false}
            showHeader={false}
            dataSource={[
              {
                key: 'name',
                title: '名称',
                value: product.title,
              },
              {
                key: 'originalPrice',
                title: '价格',
                value: (
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
                      <Typography.Title
                        style={{ margin: 0 }}
                        type="danger"
                        level={4}
                      >
                        {product.originalPrice}
                      </Typography.Title>
                    </Col>
                  </Row>
                ),
              },
              {
                key: 'price',
                title: '限时抢购价',
                value: (
                  <Space align="end">
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
                        <Typography.Title
                          style={{ margin: 0 }}
                          level={5}
                          delete
                        >
                          {product.originalPrice}
                        </Typography.Title>
                      </Col>
                    </Row>
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
                        <Typography.Title
                          style={{ margin: 0 }}
                          type="danger"
                          level={4}
                        >
                          {product.price}
                        </Typography.Title>
                      </Col>
                    </Row>
                  </Space>
                ),
              },
              {
                key: 'sale_off',
                title: '领取优惠',
                value: '暂无优惠券',
              },
              {
                key: 'rating',
                title: '评价',
                value: (
                  <Rate disabled allowHalf defaultValue={product.rating} />
                ),
              },
            ]}
            columns={[
              {
                title: 'Title',
                dataIndex: 'title',
                key: 'title',
              },
              {
                title: 'Value',
                dataIndex: 'value',
                key: 'value',
              },
            ]}
          />
        </Col>
      </Row>
    </Card>
  )
}
