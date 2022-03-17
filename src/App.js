import React from 'react';
import Photo from './Component/Photo'
import FullName from './Component/FullName'
import Adresses from './Component/Adresses'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import './App.css';

function App() {
  const style={
    display: "flex",
    justifyContent: "center",
    paddingTop: "31px"
    
  }
  return (
    <div style={style}>
      <div className="card" style={{width:"24rem"}}>
      <Photo />
        <div className="card-body">
        <FullName />
          <h5 className="card-title">Full Stack JS Junior</h5>
          <p className="card-text"><FontAwesomeIcon icon={faPhone} /> +216 29 092 413/ +216 99 035 489</p>
          <Adresses />
        </div>
      </div>
        
        
        
    </div>
  );
}

export default App;
