import React from 'react'
import { connect } from 'react-redux'
import './RouteSelected.css';

class RouteSelected extends React.Component{

  //display the selected routes from the redux store
  render(){
    return(
      <div> 
        <h2>Selected route: </h2>
          {this.props.muniSelectedRoutes.length == 0 && <span className='selectedRoute'>ALL</span>}
          {this.props.muniSelectedRoutes.map(route => (<span className='selectedRoute' key={route}>{route}</span>))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  muniSelectedRoutes: state.muniSelectedRoutes
})

export default connect(mapStateToProps)(RouteSelected)