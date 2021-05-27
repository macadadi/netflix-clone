import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import { fetchdata } from '../../features/movieSlice'
import './movie.css'
import Moviecategory from './Moviecategory'


function Movieslist() {
    const dispatch = useDispatch()
    const [keyword,setKeyword]=useState('')
    let dry;
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
    let fk;
    
try{
     fk = movies.data.filter(g=>g.title.toLowerCase().includes(keyword.toLowerCase()))
     console.log('error solved')
}
catch{
  fk = movies.data
  console.log('error occured 1 now')
}

   
  

    return (

        <div className="movielist" style={{backgroundImage : `url('${randpic}')`}} >
    
    <div className="movie-banner" >
    <div className ='selec-div'>
        <h2>{disptitle[movieoption]} <Link to='/' className="l-link" >Home</Link></h2> 
       
        <div className='selec-div select-div-g'>
           
           <select   onChange={e =>setMovieoption(e.target.value)}>
     <option selected value='top_rated'> Top Rated</option>
        <option value="popular">Popular</option>
      <option value="upcoming">Upcoming</option>

    </select>
    </div> 
         {/*input div */}
         <Row>
    <div className='g-input-div'>
        
            <input type='text' className='g-input-input' placeholder='Search' onChange={e=> setKeyword(e.target.value)}/>
         
        </div>
        </Row>
        </div>
    </div>
    
   <div>
       <div className='dv-c'>

    
    <div ref={pk} className="movie-category" onWheel={handleweel}>
        
       {movies.status === 'pending' ? (<h1>Loading data please wait</h1>) : movies.status ==='fulfilled' ? (fk.length > 0 ? (fk?.map((show,index)=> <Moviecategory setRantpic={setRantpic} key ={index} id={show.id}overview={show.overview} votes={show.vote_average}  title={show.title} imgpath={`${imgpath}${show.backdrop_path}`}/>)): <center> <h1 style={{color:'white',padding:'20px'}}>Sorry we could not find any Item matching   your search</h1></center> ): (<h3>sorry</h3>)}
      </div> 
    </div>

    </div>
      
    </div>
    )
}

export default Movieslist
