import { ConfigProvider as AntdConfigProvider } from 'antd'
import React, { PropsWithChildren } from 'react'
import { BrowserRouter as BrowserRouterProvider } from 'react-router-dom'
import { Provider as ReactReduxProvider } from 'react-redux'
import store from '../redux/store'
import locale from 'antd/locale/zh_CN'
import 'dayjs/locale/zh-cn'

export const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReactReduxProvider store={store}>
      <AntdConfigProvider locale={locale}>
        <BrowserRouterProvider>{children}</BrowserRouterProvider>
      </AntdConfigProvider>
    </ReactReduxProvider>
  )
}
