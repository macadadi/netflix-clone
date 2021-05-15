import React from 'react'
import './mainbody.css'
import Previewsection from './uneregistered/Previewsection'
import {msg, photos} from './Reusabledata'
import Header from '../Nav/Header'


function Mainbody() {
    const images = photos
    const message = msg
    return (<>
        <Header />
        <div className='main-section'>
   {   images.map((photo,index)=>(
         <Previewsection msg={message[index]} key={index} photo={photo} index={index}/>
   )
           
      )}
       
        </div>
        </>
    )
}

export default Mainbody
