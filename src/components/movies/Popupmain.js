import React, { useState } from 'react';
import Popup from './Popup';

function Popupmain() {
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
    return (
        <div>
            <input
      type="button"
      value="Click to Open Popup"
      onClick={togglePopup}
    />
 {isOpen && <Popup
      content={<>
       <button>Test button</button>
      </>}
      handleClose={togglePopup}
    />}
        </div>
    )
}

export default Popupmain
