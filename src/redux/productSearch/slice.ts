import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../lib/axios'

interface ProductSearchState {
  loading: boolean
  data: any
  error: string | null
  pagination: any
}

const initialState: ProductSearchState = {
  loading: true,
  data: [],
  error: null,
  pagination: null,
}

export const getSearchProducts = createAsyncThunk(
  'productSearch/getSearchProducts',
  async (params: {
    productKeywords: string | undefined
    nextPage: string | number
    pageSize: string | number
  }) => {
    const { productKeywords, nextPage, pageSize } = params
    let url = `/touristRoutes?pageNumber=${nextPage}&pageSize=${pageSize}`
    if (productKeywords) {
      url += `&keywords=${productKeywords}`
    }
    const resp = await axios.get(url)
    return {
      data: resp.data,
      pagination: JSON.parse(resp.headers['x-pagination']!),
    }
  }
)

export const productSearchSlice = createSlice({
  name: 'productSearch',
  initialState,
  reducers: {},
  extraReducers: {
    [getSearchProducts.pending.type]: state => {
      state.loading = true
      state.error = null
    },
    [getSearchProducts.fulfilled.type]: (state, action) => {
      state.loading = false
      state.data = action.payload.data
      state.pagination = action.payload.pagination
    },
    [getSearchProducts.rejected.type]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
  },
})
