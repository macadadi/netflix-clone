import { configureStore } from '@reduxjs/toolkit'
import bgroundReducer from './features/bgroundSlice'
import movieReducer from './features/movieSlice'

const store = configureStore({
  reducer: {
      bground : bgroundReducer,
      movies : movieReducer
  },
})
export default store