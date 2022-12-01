import { RouteObject } from 'react-router-dom'
import { Home, SignIn, ProductDetail, ProductSearch, Register } from '../pages'

export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/detail/:productId',
    element: <ProductDetail />,
  },
  {
    path: '/search',
    children: [
      {
        index: true,
        element: <ProductSearch />,
      },
      {
        path: ':productKeywords',
        element: <ProductSearch />,
      },
    ],
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
]
