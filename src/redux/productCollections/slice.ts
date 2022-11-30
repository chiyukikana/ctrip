import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../lib/axios'

interface productCollectionsState {
  loading: boolean
  data: any[]
  error: string | null
}

const initialState: productCollectionsState = {
  loading: true,
  data: [],
  error: null,
}

// 获取产品分类
export const getProductCollections = createAsyncThunk(
  'productCollections/getProductCollections',
  async () => {
    const { data } = await axios.get('/productCollections')
    return data
  }
)

export const productCollectionsSlice = createSlice({
  name: 'productCollections',
  initialState,
  reducers: {},
  extraReducers: {
    [getProductCollections.pending.type]: state => {
      // 获取数据中: 开始加载/清空错误信息
      state.loading = true
      state.error = null
    },
    [getProductCollections.fulfilled.type]: (state, action) => {
      // 获取成功: 返回请求数据/停止加载
      state.loading = false
      state.data = action.payload
    },
    [getProductCollections.rejected.type]: (state, action) => {
      // 获取失败: 停止加载/清空数据/返回错误信息
      state.loading = false
      state.data = []
      state.error = action.error.message
    },
  },
})
