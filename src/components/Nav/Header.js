import React from 'react'
import './header.css'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    } from 'reactstrap';
import Navbanner from './Navbanner';
import { photos } from '../Body/Reusabledata';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  const src = photos
  const count = useSelector(state=>state.bground)
  

 
    return (
        <div  style={{backgroundImage : `url(${src[count.value]})`}}>
         <Navbar className='navbarmain'  expand="md">
         <NavLink ><h2><Link to='/shows' className="l-link">View Shows</Link></h2> </NavLink>
          <div>
          <Nav >
              <NavItem>
                <NavLink >EngLish</NavLink>
              </NavItem>
              
           
            </Nav>

          
          </div>
           
      
        </Navbar>
        {/* Narbar banner */}
        <Navbanner />
        </div>
    )
}

export default Header
