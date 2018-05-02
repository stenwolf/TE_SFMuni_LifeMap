import React from 'react'
import { geoPath } from 'd3-geo'

class DrawMap extends React.Component {
  render(){
    const { projection,fill, stroke, strokeWidth, mapDetails } = this.props
    return(
      <g>
      {
        mapDetails.map((d, i) => (
          <path
            key={`path-${ i }`}
            d={geoPath().projection(projection())(d)}
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />))
      }
      </g>
    )
  }
}

export default DrawMap