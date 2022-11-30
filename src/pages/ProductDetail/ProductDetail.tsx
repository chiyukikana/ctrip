import React, { useEffect } from 'react'
import { message } from 'antd'
import { useDispatch, useSelector } from '../../hooks'
import { useParams } from 'react-router-dom'
import { getProductDetail } from '../../redux/productDetail/slice'
import { BasicLayout } from '../../layouts'
import { Suspense } from '../../components'

export const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>()
  const loading = useSelector(s => s.productDetail.loading)
  const product = useSelector(s => s.productDetail.data)
  const error = useSelector(s => s.productDetail.error)
  const [messageApi, contextHolder] = message.useMessage()
  const dispatch = useDispatch()
  useEffect(() => {
    productId && dispatch(getProductDetail(productId))
  }, [productId])
  useEffect(() => {
    error && messageApi.error(error)
  }, [error])
  return (
    <BasicLayout>
      {contextHolder}
      <Suspense loading={loading}>ID: {error}</Suspense>
    </BasicLayout>
  )
}
