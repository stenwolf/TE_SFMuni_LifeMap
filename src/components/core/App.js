import React, { Component } from 'react';
import './App.css';
import MapContainer from '../map/MapContainer'
import RouteSelectionContainer from '../route-selection/RouteSelectionContainer'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h2>Click on a route to select it, click again to deselect</h2>
        <h2>Display all locations if no routes are selected</h2>
        <h2>There's no sync on click functionality yet. It will automatically pick up the selected route every 15 seconds to update</h2>
        <h2>So when you select a route, you need to wait for the app to pick it up</h2>
        <RouteSelectionContainer />
        <MapContainer />        
      </div>
    )
  }
}

export default App
