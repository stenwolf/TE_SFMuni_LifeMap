import React from 'react'
import { geoMercator } from 'd3-geo'
import { connect } from 'react-redux'
import { fetchRouteList, fetchVehicleLocations, fetchAllVehicleLocations } from '../../store/muni/muni-actions'
import { fetchMap } from '../../store/map/map-actions'
import * as config from '../../config'
import DrawMap from './DrawMap'
import DrawVehicle from './DrawVehicle'

class MapContainer extends React.Component {

  constructor(){
    super()
    this.state={
      width: window.innerWidth,
      height: window.innerHeight,
      lastRequestTime: 0
    }
  }

  componentDidMount(){
    //fetch all data to render
    this.props.fetchRouteList()
    this.props.fetchMap()  
    this.props.fetchAllVehicleLocations()
    //update every 15 seconds
    setInterval(this.getVehicleLocations.bind(this), config.SYNC_INTERVAL)
  }

  getVehicleLocations(){
    //if no route is selected then fetch all, otherwise fetch selected data
    if(!this.props.muniSelectedRoutes || !this.props.muniSelectedRoutes.length){
      this.props.fetchAllVehicleLocations()
    }
    else{
      this.props.fetchVehicleLocations(this.props.muniSelectedRoutes)
    }
  }

  projection() {
    //zoom in and center to SF
    return geoMercator()
      .scale(config.SCALE)
      .center(config.SF_COORDINATES)
      .translate([ this.state.width / 2, this.state.height / 2 ])
  }

  drawMap(){
    //draw all geo json files from config, in this case, 4 files
    return config.SFMaps.map( mapDetail => {
      const { type, stroke, fill, strokeWidth } = mapDetail
      return (
        <DrawMap 
          key={type}
          mapDetails={this.props.map[type]} 
          projection={() =>this.projection()} 
          stroke={stroke} 
          fill={fill} 
          strokeWidth={strokeWidth}
        />
      )
    })
  }

  drawVehicle(){
    //draw all vehicles from the redux store
    const { locations } = this.props
    let coordinates
    if(locations.length){
      return locations.map(location => {        
        coordinates = [location.lon, location.lat]
        return (
          <DrawVehicle 
            key={location.id}
            projection={() => this.projection()}
            coordinates={coordinates}
            r={8}
            fill={'#f00'}
            label={location.routeTag}
          />
        )
      })
    }
  }

  render(){    
    if(this.props.map === null) {
      return(<h1>Loading Map</h1>)
    }
    else {
      return(
        <svg width={this.state.width} height={this.state.height} viewBox={`0 0 ${this.state.width} ${this.state.height}`}>
          {this.drawMap()}
          {this.drawVehicle()}
        </svg>
      )
    }
  }
}

const mapStateToProps = state => ({
  routeList: state.muniRoutes,
  locations: state.muniLocations,
  map: state.map,
  muniSelectedRoutes: state.muniSelectedRoutes
})

const mapDispatchToProps = dispatch => ({
  fetchRouteList: () => dispatch(fetchRouteList()),
  fetchMap: () => dispatch(fetchMap()),
  fetchVehicleLocations: (tags, lastTime) => dispatch(fetchVehicleLocations(tags, lastTime)),
  fetchAllVehicleLocations: () => dispatch(fetchAllVehicleLocations())
})

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer)