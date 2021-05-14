import React, { useState } from 'react'
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

function Header() {
  const src = photos
  const count = useSelector(state=>state.bground)
   const [isOpen,setIsopen] = useState(false)

 
    return (
        <div  style={{backgroundImage : `url(${src[count.value]})`}}>
         <Navbar className='navbarmain'  expand="md">
          <NavbarBrand href="/">
          <img src='https://www.kenyabuzz.com/lifestyle/wp-content/uploads/2019/11/Netflix-logo-and-screen.jpg' style={{width:200, marginTop: -7}} />
          </NavbarBrand>
          <div>
          <Nav >
              <NavItem>
                <NavLink href="/components/">EngLish</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Sign in</NavLink>
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
