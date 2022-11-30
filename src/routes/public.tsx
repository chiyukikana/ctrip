import { RouteObject } from 'react-router-dom'
import { Home, ProductDetail } from '../pages'

export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/detail/:productId',
    element: <ProductDetail />,
  },
]
