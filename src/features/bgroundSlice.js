import { createSlice } from '@reduxjs/toolkit'

export const bgroundSlice = createSlice({
  name: 'bground',
  initialState: {
    value: 2,
    user : 'mark'
  },
  reducers: {
    changebgimage: (state,action) => {
 
           state.value = action.payload
    },

  },
})

export const { changebgimage } = bgroundSlice.actions

export default   bgroundSlice.reducer