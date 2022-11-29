import React, { useEffect } from 'react'
import { Footer, Header, Loading } from '../../components'
import { Layout, Card, Row, Col, Typography, Input, DatePicker } from 'antd'
import { getRecommendProducts } from '../../redux/recommendProducts/slice'
import { useSelector } from '../../hooks/useSelector'
import { useDispatch } from '../../hooks/useDispatch'

const { Content } = Layout

export const Home: React.FC = () => {
  const loading = useSelector(s => s.recommendProducts.loading)
  const recommendProducts = useSelector(s => s.recommendProducts.data)
  const error = useSelector(s => s.recommendProducts.error)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRecommendProducts())
  }, [])
  if (error) {
    return <div>网站出错: {error}</div>
  }
  return (
    <Layout
      style={{
        backgroundColor: '#fff',
      }}
    >
      <Header />
      <Content
        style={{
          padding: '0 50px',
          margin: '16px 0',
          minHeight: 1024,
        }}
      >
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Loading loading={loading}>
              <Row gutter={[0, 16]}>
                {recommendProducts.map(r => {
                  return (
                    <Col span={24} key={r.id}>
                      <Card>
                        <Typography.Title level={3}>{r.title}</Typography.Title>
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
            </Loading>
          </Col>
          <Col span={12}>
            <Card>
              <Typography.Title level={3}>预定酒店</Typography.Title>
              <Input.Group compact>
                <Input
                  placeholder="城市、机场、区域、地标或酒店名称"
                  style={{ width: '40%' }}
                />
                <DatePicker.RangePicker style={{ width: '60%' }} />
              </Input.Group>
            </Card>
          </Col>
        </Row>
      </Content>
      <Footer />
    </Layout>
  )
}
