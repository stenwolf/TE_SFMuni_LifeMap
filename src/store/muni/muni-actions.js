export const FETCH_ROUTE_LIST = 'FETCH_ROUTE_LIST'
export const SET_ROUTE_LIST = 'SET_ROUTE_LIST'
export const FETCH_VEHICLE_LOCATIONS = 'FETCH_VEHICLE_LOCATIONS'
export const SET_VEHICLE_LOCATIONS = 'SET_VEHICLE_LOCATIONS'
export const FETCH_ALL_VEHICLE_LOCATIONS = 'FETCH_ALL_VEHICLE_LOCATIONS'
export const SET_ALL_VEHICLE_LOCATIONS = 'SET_ALL_VEHICLE_LOCATIONS'

export const fetchRouteList = () => ({
  type: FETCH_ROUTE_LIST
})


export const fetchVehicleLocations = (tags, lastTime) =>{
  return ({
    type: FETCH_VEHICLE_LOCATIONS,
    tags,
    lastTime
  })
} 

export const fetchAllVehicleLocations = () => ({
  type: FETCH_ALL_VEHICLE_LOCATIONS
})