import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../lib/axios'

interface RecommendProductsState {
  loading: boolean
  data: any[]
  error: string | null
}

const initialState: RecommendProductsState = {
  loading: true,
  data: [],
  error: null,
}

// 获取推荐产品
export const getRecommendProducts = createAsyncThunk(
  'recommendProducts/getRecommendProducts',
  async () => {
    const { data } = await axios.get('/productCollections')
    return data
  }
)

export const recommendProductsSlice = createSlice({
  name: 'recommendProducts',
  initialState,
  reducers: {},
  extraReducers: {
    [getRecommendProducts.pending.type]: state => {
      state.loading = true
      state.error = null
    },
    [getRecommendProducts.fulfilled.type]: (state, action) => {
      state.loading = false
      state.data = action.payload
    },
    [getRecommendProducts.rejected.type]: (state, action) => {
      state.loading = false
      state.data = []
      state.error = action.error.message
    },
  },
})
