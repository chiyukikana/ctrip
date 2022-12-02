import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../lib/axios'

interface AccountState {
  loading: boolean
  token: string | null
  error: string | null
}

const initialState: AccountState = {
  loading: false,
  token: null,
  error: null,
}

export const signIn = createAsyncThunk(
  'account/signIn',
  async ({ email, password }: { email: string; password: string }) => {
    const { data } = await axios.post('/auth/login', { email, password })
    return data.token
  }
)

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    signOut: state => {
      state.loading = false
      state.token = null
      state.error = null
    },
  },
  extraReducers: {
    [signIn.pending.type]: state => {
      state.loading = true
      state.error = null
    },
    [signIn.fulfilled.type]: (state, action) => {
      state.loading = false
      state.token = action.payload
    },
    [signIn.rejected.type]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
  },
})
