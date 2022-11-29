import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { recommendProductsSlice } from './recommendProducts/slice'

const reducer = combineReducers({
  // 推荐产品
  recommendProducts: recommendProductsSlice.reducer,
})
const store = configureStore({
  reducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
