import React, { PropsWithChildren } from 'react'
import { Spin } from 'antd'
import { SpinSize } from 'antd/es/spin'

interface PropsType extends PropsWithChildren {
  loading: boolean
  size?: SpinSize
}

export const Loading: React.FC<PropsType> = ({ loading, size, children }) => {
  return (
    <>
      {loading ? (
        <div
          style={{
            paddingTop: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Spin size={size} />
        </div>
      ) : (
        children
      )}
    </>
  )
}
