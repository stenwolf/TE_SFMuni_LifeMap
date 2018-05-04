import axios from 'axios'
import { call, put, takeEvery, all } from 'redux-saga/effects'
import * as actions from './muni-actions'
import { NEXT_BUS_URL } from '../../config'

function *fetchRouteList() {
  const res = yield call(axios.get, `${NEXT_BUS_URL}?command=routeList&a=sf-muni`)
  yield put({
    type: actions.SET_ROUTE_LIST,
    routeList: res.data 
  })
}

function *watchFetchRouteList() {
  yield takeEvery(actions.FETCH_ROUTE_LIST, fetchRouteList)
}

function *fetchVehicleLocations(action){
  //fetch multiple routes with multiple requests, then reduce all results to 1 array to give to reducer
  const { tags } = action
  let routeList = tags.map(tag => axios.get(`${NEXT_BUS_URL}?command=vehicleLocations&a=sf-muni&r=${tag}`))
  const res = yield call(axios.all, routeList)
  let selectedLocations = res.reduce((accumulator, current) => {
    if(current.data && current.data.vehicle)
      return accumulator.concat(current.data.vehicle)
    else
      return accumulator
  }, [])
  yield put({
    type: actions.SET_ALL_VEHICLE_LOCATIONS,
    locations: selectedLocations
  })

}

function *watchFetchVehicleLocations(){
  yield takeEvery(actions.FETCH_VEHICLE_LOCATIONS, fetchVehicleLocations)
}

function *fetchAllVehicleLocations(){
  const res = yield call(axios.get, `${NEXT_BUS_URL}?command=vehicleLocations&a=sf-muni`)
  yield put({
    type: actions.SET_ALL_VEHICLE_LOCATIONS,
    locations: res.data.vehicle
  })
}

function *watchFetchAllVehicleLocations(){
  yield takeEvery(actions.FETCH_ALL_VEHICLE_LOCATIONS, fetchAllVehicleLocations)
}

export function *muniSaga() {
  yield all([
    watchFetchRouteList(),
    watchFetchVehicleLocations(),
    watchFetchAllVehicleLocations()
  ])
}