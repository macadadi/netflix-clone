import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchsingleShow } from '../../features/singleshowSlice';
import Popup from './Popup';

function Moviecategory({title,imgpath,votes,overview,id}) {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch()

    const singleMovie = useSelector(state => state.singleMovie)
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
      /*dispatch query for single show */
      if(!isOpen ){
        dispatch(fetchsingleShow(id))
      }
    return 
    }

    return (
        <div className="movie-category-comp" >

          {isOpen && <Popup title={title} handleClose={togglePopup} votes={votes}  imgpath={imgpath} overview={overview}/>}
            <div     onClick={togglePopup} >
                <h3>{title.substring(0,17)}</h3> 
               
                <img src={imgpath} alt={title} />
            </div>
        </div>
    )
}

export default Moviecategory

