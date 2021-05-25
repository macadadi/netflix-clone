import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchdata } from '../../features/movieSlice'
import './movie.css'
import Moviecategory from './Moviecategory'


function Movieslist() {
    const dispatch = useDispatch()
    const pk = useRef()
    const [randpic,setRantpic]=useState('https://static1.colliderimages.com/wordpress/wp-content/uploads/2020/11/best-movies-netflix-apr-2021.jpg')
    const [movieoption,setMovieoption] = useState('top_rated')
    const movies = useSelector(state=>state.movies)
    const imgpath = "http://image.tmdb.org/t/p/w780/"
    const disptitle = {
        top_rated : 'Top Rated Shows',
        popular : 'Popular Movies',
        upcoming : 'Upcoming Tv Shows'
    }


    useEffect(()=>{
        dispatch(fetchdata(movieoption))
    },[movieoption])
  
    const handleweel =(e)=>{

      if (e.deltaY > 0){pk.current.scrollLeft += 100;
       } 
      else{pk.current.scrollLeft -= 100;
       } 
    }
    

    return (

        <div className="movielist" style={{backgroundImage : `url('${randpic}')`}} >
             
    <div className="movie-banner" >
    <div className ='selec-div'>
        <h1>{disptitle[movieoption]}</h1> 
        <div className='selec-div select-div-g'>
            <div className='g-input-div'>
        <input type='text'  placeholder='Search'/></div>
        <select   onChange={e =>setMovieoption(e.target.value)}>
     <option selected value='top_rated'> Top Rated</option>
        <option value="popular">Popular</option>
      <option value="upcoming">Upcoming</option>

    </select>
    </div>
        </div>
    </div>
    
   <div>
       <div className='dv-c'>

    
    <div ref={pk} className="movie-category" onWheel={handleweel}>
        
       {movies.status === 'pending' ? (<h1>Loading data please wait</h1>) : movies.status ==='fulfilled' ? (movies.data?.map((show,index)=> <Moviecategory setRantpic={setRantpic} key ={index} id={show.id}overview={show.overview} votes={show.vote_average}  title={show.title} imgpath={`${imgpath}${show.backdrop_path}`}/>)) : (<h3>sorry</h3>)}
      </div> 
    </div>

    </div>
      
    </div>
    )
}

export default Movieslist
