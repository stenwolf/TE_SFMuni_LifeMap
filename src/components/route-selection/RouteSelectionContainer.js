import React from 'react'
import { connect } from 'react-redux'
import { setSelectedRoutes, fetchRouteList } from '../../store/muni/muni-actions'
import RouteSelectionButton from './RouteSelectionButton'
import RouteSelected from './RouteSelected'

class RouteSelectionContainer extends React.Component{

  componentDidMount(){
    this.props.fetchRouteList()
  }

  addToSelectedRoute(value){
    this.props.setSelectedRoutes(value)
  }

  renderRouteButtons(){
    //render all buttons for each routes from the redux store
    //then pass in the function to handle adding route to redux store to each button
    if(this.props.muniRoutes){
      return this.props.muniRoutes.map(route => {
        const { title, tag } = route
        return(
          <RouteSelectionButton 
            key={tag} 
            title={title} 
            tag={tag} 
            setSelectedRoutes={this.addToSelectedRoute.bind(this)}/>
        )
      })
    }
    else{
      return <h1>Loading Routes</h1>
    }
  }

  render(){
    return(
      <div>
        {this.renderRouteButtons()}
        <RouteSelected />
      </div>
    )
  }
}


const mapStateToProps = state => ({
  muniRoutes: state.muniRoutes
})

const mapDispatchToProps = dispatch => ({
  setSelectedRoutes: (routeTag) => dispatch(setSelectedRoutes(routeTag)),
  fetchRouteList: () => dispatch(fetchRouteList())
})

export default connect(mapStateToProps, mapDispatchToProps)(RouteSelectionContainer)