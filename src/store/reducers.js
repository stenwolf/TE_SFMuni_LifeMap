import { combineReducers } from 'redux'
import muniRoutesReducer from  './muni/muni-routes-reducer'
import mapReducer from './map/map-reducer'
import muniLocationsReducer from './muni/muni-locations-reducer'
import muniSelectedRoutesReducer from './muni/muni-selected-routes-reducer'

const appReducer= combineReducers({
  muniRoutes: muniRoutesReducer,
  muniLocations: muniLocationsReducer,
  muniSelectedRoutes: muniSelectedRoutesReducer,
  map: mapReducer
})

export default appReducer