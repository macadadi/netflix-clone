import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const key = 'bb35e2dcecc02217bdac6dc948860a74'

export const fetchsingleShow = createAsyncThunk(
    'movies/fetchsingleshow',async (id)=>{
        const shows = await fetch(`http://api.themoviedb.org/3/movie/${id}?api_key=${key}&append_to_response=videos`)
        return shows.json()
    }
)


const initialState = {
   status : '',
   show : {}
}

const singleshowSlice = createSlice({
    name : 'singleshow',
    initialState : initialState,
    reducers :{

    },
    extraReducers :{
        [fetchsingleShow.pending] :(state,action)=>{
            state.status = 'pending'
        },
        [fetchsingleShow.fulfilled] : (state,action)=>{
            state.status = 'fulfilled'
            state.show = action.payload
        },
        [fetchsingleShow.rejected] : (state,action)=>{
            state.status = 'rejected'
        }

    }

})

export default singleshowSlice.reducer