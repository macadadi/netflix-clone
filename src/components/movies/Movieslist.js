import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  Increase ,Increasebyvalue,fetchdata} from '../../features/movieSlice'
import { photos } from '../Body/Reusabledata'
import Movie from './Movie'
import './movie.css'


function Movieslist() {
    const [fvideo,setFvideo]=useState([])
    const dispatch = useDispatch()
    const movied = useSelector(state=>state.movies)
    const pic= photos

    const handleIncrease =()=>{
        dispatch(Increase())
    
    }


    const handleIncreasebyvalue =()=>{
        dispatch(Increasebyvalue(10))
       
    }
     const handlefetch =()=>{
      try{
          dispatch(fetchdata(dispatch))
          console.log('data dispatched successfully')
      }
      catch(err){
        console.log('an error occured',err)
      }
     }


    return (

        <div className="movielist">
     
            <div className='movielist-movies'>
           <Movie />
            </div>
        </div>
    )
}

export default Movieslist
