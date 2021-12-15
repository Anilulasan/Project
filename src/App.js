
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Points from './components/Points';
import Requests from './components/Requests';
import AddPoint from './components/AddPoint';
import RmPoint from './components/RmPoint';

function App() {
  return (
    <Router>
      <div className="App">
        <div className= "content">
          <Routes>
            <Route exact path = "http://anilulasan.github.io/Project/" element = {<Home/>}/>
             
            <Route path = "/map" element = {<Points/>}/>
             
            <Route path = "/Requests" element = {<Requests/>}/>

            <Route path = "/addPoint" element = {<AddPoint/>}/>
              
            <Route path = "/rmPoint" element = {<RmPoint/>}/>  
          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
