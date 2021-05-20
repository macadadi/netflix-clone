import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchdata } from '../../features/movieSlice'
import './movie.css'
import Moviecategory from './Moviecategory'


function Movieslist() {
    const dispatch = useDispatch()
    const [movieoption,setMovieoption] = useState('top_rated')
    const movies = useSelector(state=>state.movies)
    const imgpath = "http://image.tmdb.org/t/p/w185/"
    const disptitle = {
        top_rated : 'Top Rated Shows',
        popular : 'Popular Movies',
        upcoming : 'Upcoming Tv Shows'
    }


    useEffect(()=>{
        dispatch(fetchdata(movieoption))
    },[movieoption])
 
    

    return (

        <div className="movielist" >
            
    <div className="movie-banner" style={{backgroundImage : `url('https://i.pinimg.com/originals/9b/bd/e6/9bbde64eb7775abcec204ded969647b6.jpg')`}}>
  
    </div>
    
   <div>
       
   <div className ='selec-div'>
        <h2>{disptitle[movieoption]}</h2> 
        <select   onChange={e =>setMovieoption(e.target.value)}>
     <option selected value='top_rated'>Top Rated</option>
        <option value="popular">Popular</option>
      <option value="upcoming">Upcoming</option>

    </select>
        </div>
    <div className="movie-category">
       {movies.status === 'pending' ? (<h1>Loading data please wait</h1>) : movies.status ==='fulfilled' ? (movies.data?.map((show,index)=> <Moviecategory key ={index} id={show.id}overview={show.overview} votes={show.vote_average}  title={show.title} imgpath={`${imgpath}${show.backdrop_path}`}/>)) : (<h3>sorry</h3>)}
       </div> 
    </div>
    </div>
    )
}

export default Movieslist
