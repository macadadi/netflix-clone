import React, { useState } from 'react';
import Popup from './Popup';

function Moviecategory({title,imgpath,votes,overview}) {
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
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

