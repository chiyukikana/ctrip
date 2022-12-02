import React, { useEffect } from 'react'
import { Spinner } from '../../components'
import { Row, Col, Carousel, Card, Typography } from 'antd'
import { getProductCollections } from '../../redux/productCollections/slice'
import { useSelector, useDispatch } from '../../hooks'
import { useNavigate } from 'react-router-dom'
import { BasicLayout } from '../../layouts'
import { Helmet } from 'react-helmet-async'
import { useMessage } from '../../hooks'

export const Home: React.FC = () => {
  // 产品分类获取状态
  const loading = useSelector(s => s.productCollections.loading)
  // 产品分类数据
  const productCollections = useSelector(s => s.productCollections.data)
  // 获取数据时的错误信息
  const error = useSelector(s => s.productCollections.error)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const messageApi = useMessage()
  // 尝试获取产品分类
  useEffect(() => {
    dispatch(getProductCollections())
  }, [])
  // 产品分类获取失败
  useEffect(() => {
    error && messageApi.error(error)
  }, [error])
  return (
    <BasicLayout>
      <Helmet>
        <title>携程旅行网官网:酒店预订,机票预订查询,旅游度假,商旅管理</title>
      </Helmet>
      <Row gutter={[16, 16]}>
        <Spinner
          loading={loading}
          extraRender={spin => (
            <>
              <Col span={12}>{spin}</Col>
              <Col span={12}>{spin}</Col>
            </>
          )}
        >
          {productCollections.map(p => {
            return (
              <Col span={12} key={p.id}>
                <Card
                  title={
                    <Typography.Title level={3} style={{ margin: 0 }}>
                      {p.title}
                    </Typography.Title>
                  }
                >
                  <Row gutter={[16, 16]}>
                    {p.touristRoutes.slice(0, 8).map((t, index) => {
                      return (
                        <Col span={12} key={index}>
                          <Card
                            type="inner"
                            size="small"
                            hoverable
                            onClick={() => navigate(`/detail/${t.id}`)}
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
                              description={`${t.description.slice(0, 50)}...`}
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
          <Col span={12}>
            <Row gutter={[0, 16]}>
              {productCollections.map(p => {
                return (
                  <Col key={p.id}>
                    <Carousel effect="fade" autoplay dotPosition="top">
                      {p.touristRoutes.map(t => {
                        return (
                          <Card
                            key={t.id}
                            cover={
                              <img src={t.touristRoutePictures[2].url} alt="" />
                            }
                          >
                            <Card.Meta
                              title={t.title}
                              description={t.description}
                            />
                          </Card>
                        )
                      })}
                    </Carousel>
                  </Col>
                )
              })}
            </Row>
          </Col>
        </Spinner>
      </Row>
    </BasicLayout>
  )
}
