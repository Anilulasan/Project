import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
const api = axios.create({
  baseURL: 'https://artemisbalanceapi.herokuapp.com/api/feed/get_feed'
})

function Deneme() {
    const [points, setPoints] = useState([]);
    api.get('/').then(res => {
      console.log(res.data)
    })
    return (
        <div>
            
        </div>
    )
}

export default Deneme;
