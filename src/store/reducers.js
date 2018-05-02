import { combineReducers } from 'redux'
import muniRoutesReducer from  './muni/muni-routes-reducer'
import mapReducer from './map/map-reducer'
import muniLocationReducer from './muni/muni-locations-reducer'

const appReducer= combineReducers({
  muniRoutes: muniRoutesReducer,
  muniLocations: muniLocationReducer,
  map: mapReducer
})

export default appReducer