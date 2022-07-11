import './App.css';
import getClosestColor from './sumoColor.js'
import React, { useState } from 'react';
function App() {
  const [color, setColor] = useState('#fff');
  const [sumoColor, setSumoColor] = useState('');
  // const color = getClosestColor('#23baaa');
  function getSumoColor(color) {

    var reg = /^#([0-9a-f]{3}){1,2}$/i;
    reg.test(color) ? setSumoColor(getClosestColor(color)) : setSumoColor('')
    reg.test(color) ? setColor(color) : setColor('')
  }

  return (
    <div className="App">
      <input type="text" className="input-color" onChange={(e) => getSumoColor(e.target.value)} />
      <div className="colorshow">
        <div className="selected" >
          <div className="swatch" style={{ backgroundColor: color, height: 200 }}></div>
          <h3 className="title">Selected Color</h3>
          <p className="hex">{color}</p>
        </div>
        <div className="sumo">
          <div className="swatch" style={{ backgroundColor: sumoColor.color, height: 200 }}></div>
          <h3 className="title">Sumo Color</h3>
          <p className="hex">{sumoColor.color}</p>
          <p className="name">{sumoColor.name}</p>
        </div>
      </div>
    </div >
  );
}

export default App;