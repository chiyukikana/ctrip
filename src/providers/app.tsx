import React, { PropsWithChildren } from 'react'
import { ConfigProvider as AntdConfigProvider } from 'antd'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Provider as ReactReduxProvider } from 'react-redux'
import { PersistGate as PersistGateProvider } from 'redux-persist/integration/react'
import { MessageProvider } from './message'
import router from '../routes/router'
import store from '../redux/store'
import locale from 'antd/locale/zh_CN'
import 'dayjs/locale/zh-cn'

export const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <HelmetProvider>
      <AntdConfigProvider locale={locale}>
        <MessageProvider>
          <ReactReduxProvider store={store.store}>
            <PersistGateProvider persistor={store.persistor}>
              <RouterProvider router={router} />
              {children}
            </PersistGateProvider>
          </ReactReduxProvider>
        </MessageProvider>
      </AntdConfigProvider>
    </HelmetProvider>
  )
}
