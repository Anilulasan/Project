import React from 'react'
import { useState } from 'react';

function ButtonRM() {
    const [modal, setModal] = useState(false);
    const [ID, setID] = useState();

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
                Remove Point
            </button>

            {modal && (
                <div className='inputsP'>
                    <form onSubmit={handleSubmit}>
                            <label><b>Point ID:              </b></label>
                            <input 
                                type="text" 
                                placeholder="Enter Point ID" 
                                value={ID}
                                onChange={(e) => setID(e.target.value)}
                            /><br />

                            <button type='submit' className='btnAP'>Remove</button>
                        </form>
                </div>
            )}
            
                
        </div>
    )
}

export default ButtonRM;