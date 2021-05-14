import { configureStore } from '@reduxjs/toolkit'
import bgroundReducer from './features/bgroundSlice'

const store = configureStore({
  reducer: {
      bground : bgroundReducer,
  },
})
export default store