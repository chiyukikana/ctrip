import { useDispatch as useReduxDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store'

// 让dispatch能接受异步thunk处理的类型
export const useDispatch = () => useReduxDispatch<AppDispatch>()
