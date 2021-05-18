import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchdata } from '../../features/movieSlice'
import './movie.css'
import Moviecategory from './Moviecategory'


function Movieslist() {
    const dispatch = useDispatch()
    const movies = useSelector(state=>state.movies)
    const imgpath = "http://image.tmdb.org/t/p/w185/"


    useEffect(()=>{
        dispatch(fetchdata())
    },[])
 
    

    return (

        <div className="movielist" >
            
    <div className="movie-banner" style={{backgroundImage : `url('https://i.pinimg.com/originals/9b/bd/e6/9bbde64eb7775abcec204ded969647b6.jpg')`}}>
  
    </div>
    
   <div>
       
        <h2>Money heist</h2>
    <div className="movie-category">
       {console.log('maricus',movies.data[1]?.backdrop_path)}
       {movies.status === 'pending' ? (<h1>Loading data please wait</h1>) : movies.status ==='fulfilled' ? (movies.data.map((show,index)=> <Moviecategory key ={index} id={show.id}overview={show.overview} votes={show.vote_average}  title={show.title} imgpath={`${imgpath}${show.backdrop_path}`}/>)) : (<h3>sorry</h3>)}
       </div> 
    </div>
    <div> <h2>First and furious</h2>
    <div className="movie-category">
       
        <Moviecategory category={'popular'} title={'money heist'} imgpath={'https://i.pinimg.com/originals/9b/bd/e6/9bbde64eb7775abcec204ded969647b6.jpg'}/>
        <Moviecategory category={'popular'} title={'money heist'} imgpath={'https://i.pinimg.com/originals/9b/bd/e6/9bbde64eb7775abcec204ded969647b6.jpg'}/>
        <Moviecategory category={'popular'} title={'money heist'} imgpath={'https://i.pinimg.com/originals/9b/bd/e6/9bbde64eb7775abcec204ded969647b6.jpg'}/>
        <Moviecategory category={'popular'} title={'money heist'} imgpath={'https://i.pinimg.com/originals/9b/bd/e6/9bbde64eb7775abcec204ded969647b6.jpg'}/>
        <Moviecategory category={'popular'} title={'money heist'} imgpath={'https://i.pinimg.com/originals/9b/bd/e6/9bbde64eb7775abcec204ded969647b6.jpg'}/>
        <Moviecategory category={'popular'} title={'money heist'} imgpath={'https://i.pinimg.com/originals/9b/bd/e6/9bbde64eb7775abcec204ded969647b6.jpg'}/>
    </div> 
    </div>
    <div> <h2>No retreate</h2>
    <div className="movie-category">
       
        <Moviecategory category={'popular'} title={'money heist'} imgpath={'https://i.pinimg.com/originals/9b/bd/e6/9bbde64eb7775abcec204ded969647b6.jpg'}/>
        <Moviecategory category={'popular'} title={'money heist'} imgpath={'https://i.pinimg.com/originals/9b/bd/e6/9bbde64eb7775abcec204ded969647b6.jpg'}/>
        <Moviecategory category={'popular'} title={'money heist'} imgpath={'https://i.pinimg.com/originals/9b/bd/e6/9bbde64eb7775abcec204ded969647b6.jpg'}/>
        <Moviecategory category={'popular'} title={'money heist'} imgpath={'https://i.pinimg.com/originals/9b/bd/e6/9bbde64eb7775abcec204ded969647b6.jpg'}/>
        <Moviecategory category={'popular'} title={'money heist'} imgpath={'https://i.pinimg.com/originals/9b/bd/e6/9bbde64eb7775abcec204ded969647b6.jpg'}/>
        <Moviecategory category={'popular'} title={'money heist'} imgpath={'https://i.pinimg.com/originals/9b/bd/e6/9bbde64eb7775abcec204ded969647b6.jpg'}/>
    </div> 
    </div>
        </div>
    )
}

export default Movieslist
