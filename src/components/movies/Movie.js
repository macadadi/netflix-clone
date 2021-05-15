import React from 'react'
import { photos } from '../Body/Reusabledata'

function Movie() {
    const bgimg = photos
    return (
        <div className="single-movie">
            <img src={bgimg[0]} alt='no image'/>
        </div>
    )
}

export default Movie
