import { RouteObject } from 'react-router-dom'
import { Home } from '../pages'

export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
]
