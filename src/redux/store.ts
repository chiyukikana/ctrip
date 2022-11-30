import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { productCollectionsSlice } from './productCollections/slice'
import { actionLog } from './middlewares/actionLog'

const reducer = combineReducers({
  // 产品分类
  productCollections: productCollectionsSlice.reducer,
})
const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(actionLog),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
