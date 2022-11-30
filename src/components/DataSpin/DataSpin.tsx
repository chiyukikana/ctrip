import React, { PropsWithChildren } from 'react'
import { Spin } from 'antd'
import { SpinSize } from 'antd/es/spin'

interface PropsType extends PropsWithChildren {
  loading: boolean
  style?: React.CSSProperties
  size?: SpinSize
}

export const DataSpin: React.FC<PropsType> = ({
  loading,
  style,
  size,
  children,
}) => {
  return loading ? (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...style,
      }}
    >
      <Spin size={size} />
    </div>
  ) : (
    <>{children}</>
  )
}
