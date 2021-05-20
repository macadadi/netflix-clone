import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const key = 'bb35e2dcecc02217bdac6dc948860a74'

export const fetchdata = createAsyncThunk(
    'movies/fetchdata', async (Option)=>{
        const req = await fetch(`https://api.themoviedb.org/3/movie/${Option}?api_key=${key}&language=en-US&page=1`).catch(err=>console.log('an error occured',err))
        return req.json().then(res=>res.results)
    }
)



const initialState = {
    value : 4,
    status : '',
    posterUrl : 6,
    data : {}
}

const movieSlice= createSlice({
    name : 'movies',
    initialState : initialState,
    reducers :{
        bgChange :(state,action)=>{
            state.posterUrl = action.payload
        }

    },
    extraReducers :{
     [fetchdata.pending] : (state,action)=>{
        state.status = 'pending'
     },
     [fetchdata.fulfilled] : (state,action)=>{
        state.data = action.payload
        state.status = 'fulfilled'
     },
     [fetchdata.rejected] :(state,action)=>{
         state.status = 'rejected'
     },

    }
})

export const { bgChange} = movieSlice.actions
export default movieSlice.reducer