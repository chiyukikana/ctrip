import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../lib/axios'

interface ProductDetailState {
  loading: boolean
  data: any
  error: string | null
}

const initialState: ProductDetailState = {
  loading: true,
  data: null,
  error: null,
}

export const getProductDetail = createAsyncThunk(
  'productDetail/getProductDetail',
  async (productId: string) => {
    const { data } = await axios.get(
      `http://123.56.149.216:8080/api/touristRoutes/${productId}`
    )
    return data
  }
)

export const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState,
  reducers: {},
  extraReducers: {
    [getProductDetail.pending.type]: state => {
      state.loading = true
      state.error = null
    },
    [getProductDetail.fulfilled.type]: (state, action) => {
      state.loading = false
      state.data = action.payload
    },
    [getProductDetail.rejected.type]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
  },
})
