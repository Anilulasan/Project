import React from 'react'
import Navbar from './Navbar';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Component } from 'react';
import '../index.css'
import Button from './Button';
import ButtonRM from './ButtonRM'
import { useNavigate } from 'react-router-dom';



export class MapFrame extends Component {
   

    constructor(props) {
      super(props);
  
      this.state = {
        stores: [{lat: 47.49855629475769, lng: -122.14184416996333},
                {latitude: 47.359423, longitude: -122.021071},
                {latitude: 47.2052192687988, longitude: -121.988426208496},
                {latitude: 40.8907081, longitude: 29.5434325},
                {latitude: 40.984488, longitude: 29.2140121},
                {latitude: 40.984563, longitude: 29.324862}]
      }
    }
  
    displayMarkers = () => {
      return this.state.stores.map((store, index) => {
        return <Marker key={index} id={index} position={{
         lat: store.latitude,
         lng: store.longitude
       }}
       onClick={() => console.log(1)} />
      })
    }
    
    render() {
      return (
        
        <div>
              
          <Map
            google={this.props.google}
            zoom={10}
            style={mapStyles}
            initialCenter={{ lat: 40.81, lng: 29.36}}
           >
          {this.displayMarkers()}
            </Map>
          </div>
            
            
            
        
            
            
         
      );
    }
  }
export default GoogleApiWrapper({
    apiKey: 'AIzaSyDrLlGDGGxdkkT9nsIeEkjenFjcRzkf-UM'
  })(MapFrame);

  const mapStyles = {
    width: '100%',
    height: '95%',
  };

