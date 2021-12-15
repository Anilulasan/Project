import React from 'react'
import MapFrame from './MapFrame'
import Button from './Button'
import ButtonRM from './ButtonRM'
import Navbar from './Navbar'
import { useNavigate } from 'react-router'
import { useState } from 'react'

function Points() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/addPoint')
        
    }

    const handleClick1 = () => {
        navigate('/rmPoint')
        
    }
    return (
        <div className='MapD'>
            <Navbar/>
            <div className='MapFrame'>
                <MapFrame/>
            </div>
           
        
            <div className='btnPSAP'>
                
                <button onClick={handleClick} className='firstbtn'>Add Point</button>
                <button onClick={handleClick1} className='firstbtn'>Remove Point</button>
            </div>
        </div>
    )
}

export default Points;