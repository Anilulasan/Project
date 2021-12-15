import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';

function AddPoint() {
    const [lat, setLat] = useState();
    const [lng, setLng] = useState();
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        
        navigate('/map')
        
    }
    return (
        <div>
            <div className='inputsP'>
                    <form onSubmit={handleSubmit}>
                            <label><b>Latitude:              </b></label>
                            <input 
                                type="text" 
                                placeholder="Enter latitude" 
                                value={lat}
                                onChange={(e) => setLat(e.target.value)}
                            /><br />

                            <label><b>Longtitude:          </b></label>
                            <input 
                                type="password" 
                                placeholder="Enter longtitude" 
                                value= {lng}
                                onChange={(e) => setLng(e.target.value)}
                            /><br />

                            <button type='submit'>Cancel</button>
                            <button type='submit' className='btnAP'>Add</button>
                        </form>
                </div>
        </div>
    )
}

export default AddPoint;
