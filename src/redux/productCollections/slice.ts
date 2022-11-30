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

// 获取推荐产品分类
export const getProductCollections = createAsyncThunk(
  'productCollections/getproductCollections',
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
      state.loading = true
      state.error = null
    },
    [getProductCollections.fulfilled.type]: (state, action) => {
      state.loading = false
      state.data = action.payload
    },
    [getProductCollections.rejected.type]: (state, action) => {
      state.loading = false
      state.data = []
      state.error = action.error.message
    },
  },
})
