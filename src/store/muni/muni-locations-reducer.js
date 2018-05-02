import * as actions from './muni-actions'
const initialLocations = {}
function muniLocationsReducer(locations = initialLocations, action) {
  switch(action.type) {
    case actions.SET_ALL_VEHICLE_LOCATIONS:
    return action.locations
    default:
      return locations
  }
}

export default muniLocationsReducer