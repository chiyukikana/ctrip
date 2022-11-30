import React, { useEffect } from 'react'
import { GlobalFooter, GlobalHeader, DataSpin } from '../../components'
import { Layout, Row, Col, Carousel, message, Card, Typography } from 'antd'
import { getProductCollections } from '../../redux/productCollections/slice'
import { useSelector, useDispatch } from '../../hooks'

export const Home: React.FC = () => {
  const loading = useSelector(s => s.productCollections.loading)
  const productCollections = useSelector(s => s.productCollections.data)
  const error = useSelector(s => s.productCollections.error)
  const dispatch = useDispatch()
  const [messageApi, contextHolder] = message.useMessage()
  useEffect(() => {
    dispatch(getProductCollections())
  }, [])
  useEffect(() => {
    error && messageApi.error(error)
  }, [error])
  return (
    <>
      {contextHolder}
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
            minHeight: 1024,
          }}
        >
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <DataSpin loading={loading}>
                <Row gutter={[0, 64]}>
                  {productCollections.map(r => {
                    return (
                      <Col span={24} key={r.id}>
                        <Card
                          title={
                            <Typography.Title level={3} style={{ margin: 0 }}>
                              {r.title}
                            </Typography.Title>
                          }
                        >
                          <Row gutter={[16, 16]}>
                            {r.touristRoutes.slice(0, 8).map((t, index) => {
                              return (
                                <Col span={12} key={index}>
                                  <Card
                                    type="inner"
                                    size="small"
                                    cover={
                                      <img
                                        draggable={false}
                                        height={200}
                                        src={t.touristRoutePictures[1].url}
                                        alt=""
                                      />
                                    }
                                  >
                                    <Card.Meta
                                      title={t.title}
                                      description={`${t.description.slice(
                                        0,
                                        50
                                      )}...`}
                                    />
                                  </Card>
                                </Col>
                              )
                            })}
                          </Row>
                        </Card>
                      </Col>
                    )
                  })}
                </Row>
              </DataSpin>
            </Col>
            <Col span={12}>
              <DataSpin loading={loading}>
                <Carousel></Carousel>
              </DataSpin>
            </Col>
          </Row>
        </Layout.Content>
        <GlobalFooter />
      </Layout>
    </>
  )
}
