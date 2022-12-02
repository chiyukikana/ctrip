import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { createBlacklistFilter } from 'redux-persist-transform-filter'
import storage from 'redux-persist/lib/storage'
import { productCollectionsSlice } from './productCollections/slice'
import { productDetailSlice } from './productDetail/slice'
import { actionLog } from './middlewares/actionLog'
import { productSearchSlice } from './productSearch/slice'
import { accountSlice } from './account/slice'

const reducer = combineReducers({
  // 产品分类
  productCollections: productCollectionsSlice.reducer,
  // 旅游路线
  productDetail: productDetailSlice.reducer,
  // 产品搜索
  productSearch: productSearchSlice.reducer,
  // 账户
  account: accountSlice.reducer,
})
// 过滤掉account的loading与error对象
const accountBlacklistFilter = createBlacklistFilter('account', [
  'loading',
  'error',
])
const persistedReducer = persistReducer(
  {
    key: 'ctrip',
    storage,
    whitelist: ['account'],
    transforms: [accountBlacklistFilter],
  },
  reducer
)
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(actionLog),
})
const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default { store, persistor }
