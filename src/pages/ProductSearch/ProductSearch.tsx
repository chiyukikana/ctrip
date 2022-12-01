import React, { useEffect } from 'react'
import { message } from 'antd'
import { useParams } from 'react-router-dom'
import { Spinner } from '../../components'
import { useDispatch, useSelector } from '../../hooks'
import { BasicLayout } from '../../layouts'
import { getSearchProducts } from '../../redux/productSearch/slice'
import { ProductList } from './ProductList'
import { Helmet } from 'react-helmet-async'

export const ProductSearch: React.FC = () => {
  const { productKeywords } = useParams<{ productKeywords: string }>()
  const loading = useSelector(s => s.productSearch.loading)
  const productList = useSelector(s => s.productSearch.data)
  const pagination = useSelector(s => s.productSearch.pagination)
  const error = useSelector(s => s.productSearch.error)
  const dispatch = useDispatch()
  const [messageApi, contextHolder] = message.useMessage()
  useEffect(() => {
    dispatch(getSearchProducts({ productKeywords, nextPage: 1, pageSize: 10 }))
  }, [productKeywords])
  useEffect(() => {
    error && messageApi.error(error)
  }, [error])
  return (
    <BasicLayout>
      {contextHolder}
      <Helmet>
        <title>{productKeywords ? `${productKeywords} - ` : ''}搜索结果</title>
      </Helmet>
      <Spinner loading={loading}>
        <ProductList
          products={productList}
          paging={pagination}
          onPageChange={(nextPage, pageSize) => {
            dispatch(
              getSearchProducts({
                productKeywords,
                nextPage,
                pageSize,
              })
            )
          }}
        />
      </Spinner>
    </BasicLayout>
  )
}
