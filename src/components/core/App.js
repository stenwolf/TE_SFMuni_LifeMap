import React, { Component } from 'react';
import './App.css';
import MapContainer from '../map/MapContainer'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <MapContainer />
      </div>
    );
  }
}

export default App;
