import React, { useEffect } from 'react'
import { Col, Row } from 'antd'
import { useDispatch, useMessageApi, useSelector } from '../../hooks'
import { useParams } from 'react-router-dom'
import { getProductDetail } from '../../redux/productDetail/slice'
import { BasicLayout } from '../../layouts'
import { Spinner } from '../../components'
import { ProductActions } from './ProductActions'
import { ProductAbout } from './ProductAbout'
import { ProductIntro } from './ProductIntro'
import { Helmet } from 'react-helmet-async'

export const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>()
  const loading = useSelector(s => s.productDetail.loading)
  const product = useSelector(s => s.productDetail.data)
  const error = useSelector(s => s.productDetail.error)
  const messageApi = useMessageApi()
  const dispatch = useDispatch()
  useEffect(() => {
    productId && dispatch(getProductDetail(productId))
  }, [productId])
  useEffect(() => {
    error && messageApi.error(error)
  }, [error])
  return (
    <BasicLayout>
      <Spinner
        loading={loading}
        extraRender={spin => (
          <Row gutter={[16, 0]}>
            <Col span={12}>{spin}</Col>
            <Col span={12}>{spin}</Col>
          </Row>
        )}
      >
        <Helmet>
          <title>{product?.title}</title>
        </Helmet>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <ProductAbout product={product} />
          </Col>
          <Col span={12}>
            <ProductActions />
          </Col>
          <Col span={24}>
            <ProductIntro product={product} />
          </Col>
        </Row>
      </Spinner>
    </BasicLayout>
  )
}
