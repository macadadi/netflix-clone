import { configureStore } from '@reduxjs/toolkit'
import bgroundReducer from './features/bgroundSlice'
import movieReducer from './features/movieSlice'
import singleshowReducer from './features/singleshowSlice'

const store = configureStore({
  reducer: {
      bground : bgroundReducer,
      movies : movieReducer,
      singleshow : singleshowReducer,
  },
})
export default store