import { AppRoutes } from './routes'
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import store from './redux/store'
import { ConfigProvider } from 'antd'
import locale from 'antd/locale/zh_CN'

function App() {
  return (
    <ReduxProvider store={store}>
      <ConfigProvider locale={locale}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ConfigProvider>
    </ReduxProvider>
  )
}

export default App
