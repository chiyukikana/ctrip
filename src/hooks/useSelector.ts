import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from 'react-redux'
import { RootState } from '../redux/store'

// 拿到store中所有reducers的类型
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector
