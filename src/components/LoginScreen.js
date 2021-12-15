import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../asd.png'


function LoginScreen() {
        const navigate = useNavigate();
        const [ID, setID] = useState("");
        const [Pw, setPw] = useState("");

        const handleSubmit = (event) => {
            event.preventDefault();
            if ((ID === "admin" && Pw === "admin1234"))
                navigate('/map')
                console.log(1)
            
        }

        

        return (
            <div className='login'>
                <div className='img'>
                    <img src={logo} className='logo' />

                </div>
                <div className='inputs'>
                    <h1 style={{ fontweight: 'bold' }}>         Login as Administrator</h1>
                    <form onSubmit={handleSubmit}>
                        <label><b>ID                       </b></label>
                        <input 
                            type="text" 
                            placeholder="Enter ID" 
                            required
                            value={ID}
                            onChange={(e) => setID(e.target.value)}
                        /><br />

                        <label><b>Password           </b></label>
                        <input 
                            type="password" 
                            placeholder="Enter password" 
                            required
                            value= {Pw}
                            onChange={(e) => setPw(e.target.value)}
                        /><br />

                        <button type='submit' className='log'>Login</button>
                    </form>


                </div>

            </div>
        );
}

export default LoginScreen;
