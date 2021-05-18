import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col,Row } from 'reactstrap'
import { changebgimage } from '../../../features/bgroundSlice'

function Previewsection({photo,msg,index}) {

    const count = useSelector(state=>state.bground)
    const dispatch=useDispatch()
    const [id,setId]= useState(0)

    const hanldeChange =()=>{
        setId(index)
        dispatch(changebgimage(id))
    }


    return (
        <div className="previewsection">
    
     <Row className="preview-row">
      
        <Col className="preview-col" sm="6"><h3>{msg}</h3></Col>
        <Col className="preview-col" sm="6">
            <img src={photo} onMouseOver={hanldeChange} alt=''/>
        </Col>
      </Row>
      
        </div>
    )
}

export default Previewsection
