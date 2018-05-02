import * as actions from './map-actions'
function mapReducer(map = null, action) {
  switch(action.type) {
    case actions.SET_MAP:
      return action.maps
    default:
      return map
  }
}

export default mapReducer