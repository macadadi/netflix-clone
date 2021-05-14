import React from 'react'
import { Button } from 'reactstrap'

function Navbanner() {
    return (
        <div className='navbanner' >
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
            <form className='navbanner-input'>
                <input type='text'  placeholder='Search a movie'/> 
                <button type='submit'>Search</button>
            </form>

        </div>
    )
}

export default Navbanner
