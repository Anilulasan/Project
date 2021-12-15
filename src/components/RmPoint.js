import React from 'react'
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router';

function RmPoint() {
    const [ID, setID] = useState();
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/map')
        console.log(1)
        
    }
    return (
        <div>
            <div className='inputsP'>
                <form onSubmit={handleSubmit}>
                    <label><b>Point ID:              </b></label>
                    <input 
                        type="text" 
                        placeholder="Enter Point ID" 
                        value={ID}
                        onChange={(e) => setID(e.target.value)}
                    /><br />
                        <button>Cancel</button>
                        <button type='submit' className='btnAP'>Remove</button>
                    </form>
            </div>
        </div>
    )
}

export default RmPoint;