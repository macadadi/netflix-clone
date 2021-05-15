import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";





export const fetchdata = createAsyncThunk(
    'movies/fetchdata', async ()=>{
        const req = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=bb35e2dcecc02217bdac6dc948860a74&language=en-US&page=1').catch(err=>console.log('an error occured',err))
        return req.json().then(res=>res.results)
    }
)

const initialState = [{
    value : 4,
    status : '',
    data : {}
}]

const movieSlice= createSlice({
    name : 'movies',
    initialState : initialState,
    reducers :{
        Increase : (state,action)=>{
           state[0].value +=1
        },
        Increasebyvalue :(state,action)=>{
            state[0].value += action.payload   
        }

    },
    extraReducers :{
     [fetchdata.pending] : (state,action)=>{
        state[0].status = 'fetching data'
     },
     [fetchdata.fulfilled] : (state,action)=>{
        state[0].data = action.payload
        state[0].status = 'finished fetching data'
     },
     [fetchdata.rejected] :(state,action)=>{
         state[0].status = 'failed fetching data'
     }

    }
})

export const { Increase,Increasebyvalue} = movieSlice.actions
export default movieSlice.reducer