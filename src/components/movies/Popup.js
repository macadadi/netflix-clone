import React from 'react'

function Popup({handleClose,title,imgpath,votes,overview}) {
    return (
        <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={handleClose}>x</span>
         <h3> {title}</h3>
         <img src={imgpath} alt={title} />
         <h4>{votes} votes</h4>
         <p>{overview}</p>
          <button>Watch Trailer</button>
        </div>

      </div>
    )
}

export default Popup
