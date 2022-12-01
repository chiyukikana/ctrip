import React, { PropsWithChildren } from 'react'
import { Spin } from 'antd'
import { SpinSize } from 'antd/es/spin'

interface PropsType {
  loading: boolean
  extraRender?: (spin: React.ReactElement) => React.ReactNode
  style?: React.CSSProperties
  size?: SpinSize
}

export const Spinner: React.FC<PropsWithChildren<PropsType>> = ({
  loading,
  extraRender,
  style,
  size,
  children,
}) => {
  const StyledSpin: React.FC = () => (
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
  )
  const SpinWrapper: React.FC = () => (
    <>{extraRender ? extraRender(<StyledSpin />) : <StyledSpin />}</>
  )
  return <>{loading ? <SpinWrapper /> : children}</>
}
