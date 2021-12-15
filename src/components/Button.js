import React from 'react'
import { useState } from 'react';

function Button() {
    const [modal, setModal] = useState(false);
    

    const toggleModal = () => {
        setModal(!modal);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log(1)
        
    }

    if (modal) {
        document.body.classList.add('active-modal')
    }else {
        document.body.classList.remove('active-modal')
    }

    return (
        <div>
            <button className='firstbtn'
                onClick={toggleModal}>
                Add Point
            </button>

            
            
                
        </div>
    )
}

export default Button;