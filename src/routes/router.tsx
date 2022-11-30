import { createBrowserRouter } from 'react-router-dom'
import { protectedRoutes } from './protected'
import { publicRoutes } from './public'

const router = createBrowserRouter([
  ...publicRoutes,
  ...protectedRoutes,
  {
    path: '*',
    element: <div>404</div>,
  },
])

export default router
