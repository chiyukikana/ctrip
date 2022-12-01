import React, { PropsWithChildren } from 'react'
import { ConfigProvider as AntdConfigProvider } from 'antd'
import { RouterProvider } from 'react-router-dom'
import { Provider as ReactReduxProvider } from 'react-redux'
import router from '../routes/router'
import store from '../redux/store'
import locale from 'antd/locale/zh_CN'
import 'dayjs/locale/zh-cn'

export const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <AntdConfigProvider locale={locale}>
      <ReactReduxProvider store={store}>
        <RouterProvider router={router} fallbackElement={<h2>Loading...</h2>} />
        {children}
      </ReactReduxProvider>
    </AntdConfigProvider>
  )
}
