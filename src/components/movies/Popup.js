import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Iframeview from './Iframeview'

function Popup({handleClose,title,imgpath,votes,overview}) {
  const singleMovie = useSelector(state => state.singleshow)
    const [isWatch,setIswatch]=useState(false)
    const handlewatch =()=>{
        setIswatch(!isWatch)
    }

    const key = singleMovie?.show.videos.results[0].key
    return (
        <div className="popup-box">
        <div className="box">
          {console.log('hey the key is',key)}
          <span className="close-icon" onClick={handleClose}>x</span>
          {isWatch ? (<Iframeview  movieId={key}/>) :(<>  <h3> {title}</h3>
         <img src={imgpath} alt={title} />
         <h4>{votes} votes</h4>
         <p>{overview}</p></>) }
       
         <button onClick={handlewatch}>{isWatch ? (<h3>Cancel</h3>) : (<h3>Watch Trailer</h3>)}</button>
        </div>
      
      </div>
    )
}

export default Popup
