import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchsingleShow } from '../../features/singleshowSlice';
import Popup from './Popup';

function Moviecategory({title,imgpath,votes,overview,id}) {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch()
    const [viewclick,setViewclick] = useState(false)
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
      /*dispatch query for single show */
      if(!isOpen ){
        dispatch(fetchsingleShow(id))
      }
    return 
    }

    const getTitle =()=>{
      setViewclick(true)
    }
    const removeTitle =()=>{
      setViewclick(false)
    }
    return (
        <div className="movie-category-comp"  >

          {isOpen && <Popup title={title} handleClose={togglePopup} votes={votes}  imgpath={imgpath} overview={overview}/>}
            <div     onClick={togglePopup}  onMouseOver={getTitle} onMouseLeave={removeTitle}>
                <h3 style={{fontSize:'18px'}}>{viewclick ? 'Click for more details' : title.substring(0,17)} </h3> 
               
                <img src={imgpath} alt={title} />
            </div>
        </div>
    )
}

export default Moviecategory

