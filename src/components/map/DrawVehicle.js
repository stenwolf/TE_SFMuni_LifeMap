import React from 'react'

class DrawVehicle extends React.Component{
  render(){
    const { projection, r, fill, coordinates, label } = this.props
    const lon = projection()(coordinates)[0]
    const lat = projection()(coordinates)[1]
    console.log('circle: ', lon, lat, label)
    return(
      <g>
      <circle cx={lon} cy={lat} r={r} fill={fill} />
      <text x={lon} y={lat} dx={-5} dy={5}>{label}</text>
    </g>
    )

  }
}

export default DrawVehicle