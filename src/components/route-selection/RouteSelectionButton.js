import React from 'react'

class RouteSelectionButton extends React.Component{

  handleClick(e){
    this.props.setSelectedRoutes(e.target.value)
  }

  render(){
    return(
      <button type='button' value={this.props.tag} onClick={(e) => this.handleClick(e)}>
        {this.props.title}
      </button>
    )
  }
}

export default RouteSelectionButton