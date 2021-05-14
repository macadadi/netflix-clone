import React from 'react'
import './mainbody.css'
import Previewsection from './uneregistered/Previewsection'
import {msg, photos} from './Reusabledata'


function Mainbody() {
    const images = photos
    const message = msg
    return (
        <div className='main-section'>
   {   images.map((photo,index)=>(
         <Previewsection msg={message[index]} key={index} photo={photo} index={index}/>
   )
           
      )}
       
        </div>
    )
}

export default Mainbody
