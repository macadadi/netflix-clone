import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Col, Row } from 'reactstrap'
import Iframeview from './Iframeview'

function Popup({handleClose,title,imgpath,votes,overview}) {
  const singleMovie = useSelector(state => state.singleshow)
    const [isWatch,setIswatch]=useState(false)
    const handlewatch =()=>{
        setIswatch(!isWatch)
    }

    const key = singleMovie.show.videos?.results[0].key
    return (
        <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={handleClose}>x</span>
          {isWatch ? (<Iframeview  movieId={key}/>) :(<> <div className='popup-one'> <Row><Col md="6"  ><div> <h3> {title}</h3>
         <img src={imgpath} alt={title} />
         <h5>{`${votes} votes`} </h5>
         </div>
         </Col>
         <Col md="6"  >
        <div className='pop-overview'> <p>{overview}</p> </div> </Col></Row></div></>) }
       
         <button className='pop-btn' onClick={handlewatch}>{isWatch ? (<h5>Cancel</h5>) : (<h5>Watch Trailer</h5>)}</button>
        </div>
      
      </div>
    )
}

export default Popup
