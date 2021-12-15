import React from 'react'
import {Link} from 'react-router-dom';
function Navbar() {
    return (
        <nav className="navbar">
            <div className= "links">
                <Link to = "/Requests">Requests</Link>
                <Link to = "/Map">Points</Link>
                <Link to = "/" style={{float: 'right'}}>Log out</Link>
            </div>
            
        </nav>
    )
}

export default Navbar;
