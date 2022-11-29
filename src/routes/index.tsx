import { useRoutes } from 'react-router-dom'
import { protectedRoutes } from './protected'
import { publicRoutes } from './public'

export const AppRoutes = () => {
  const elements = useRoutes([...publicRoutes, ...protectedRoutes])

  return <>{elements}</>
}
