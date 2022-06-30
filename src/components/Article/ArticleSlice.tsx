import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import config from '../../config'

// const sleep = (t = Math.random() * 200 + 300) => new Promise(resolve => setTimeout(resolve, t))

interface InitialState {
  loading: boolean
  error: string | null
  articleData: any
}

export const initialState: InitialState = {
  loading: false,
  error: null,
  articleData: null,
}

// type InitialData = {
//   auditoriumEid: string
//   auditoriumId: number
// }
// const initialData = (window as any).__INITIAL_DATA__ as InitialData

export const fetchArticle = createAsyncThunk('category/fetchArticle', async (id:string, {rejectWithValue}) => {
  // get sections info
  try {
    const response = await axios.get(`${config.article}${id}/useApi/1`)
    return response.data
  } catch (err) {
    return rejectWithValue('Something went wrong.')
  }
})

export const mySlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    cleanArticle: (state)=>{
      state.articleData = null
    }
  },
  extraReducers: {
    [fetchArticle.pending.type]: state => {
      state.loading = true
    },
    [fetchArticle.fulfilled.type]: (state, action) => {
      state.articleData = action.payload
      state.loading = false
    },
    [fetchArticle.rejected.type]: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
  },
})

export const {cleanArticle} = mySlice.actions

export default mySlice.reducer
