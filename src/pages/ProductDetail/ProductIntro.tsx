import { Card, Divider, Row, Typography, Col } from 'antd'
import React from 'react'

interface PropsType {
  product: any
}

export const ProductIntro: React.FC<PropsType> = ({ product }) => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Card
          id="feature"
          title={
            <Typography.Title
              style={{ margin: 0, textAlign: 'center' }}
              level={3}
            >
              产品特色
            </Typography.Title>
          }
        >
          <div dangerouslySetInnerHTML={{ __html: product.features }}></div>
        </Card>
      </Col>
      <Col span={24}>
        <Card
          id="fees"
          title={
            <Typography.Title
              style={{ margin: 0, textAlign: 'center' }}
              level={3}
            >
              费用
            </Typography.Title>
          }
        >
          <div dangerouslySetInnerHTML={{ __html: product.fees }}></div>
        </Card>
      </Col>
      <Col span={24}>
        <Card
          id="notes"
          title={
            <Typography.Title
              style={{ margin: 0, textAlign: 'center' }}
              level={3}
            >
              预定须知
            </Typography.Title>
          }
        >
          <div dangerouslySetInnerHTML={{ __html: product.notes }}></div>
        </Card>
      </Col>
    </Row>
  )
}
