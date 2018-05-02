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
  const { tags, lastTime } = action
  console.log('saga', tags, lastTime)


  let routeList = tags.map(tag => axios.get(`${NEXT_BUS_URL}?command=vehicleLocations&a=sf-muni&r=${tag}&t=${lastTime}`))
  const res = yield call(axios.all, routeList)
  console.log(res)
  // let maps = {}
  // yield all (res.map((map, i) => (maps[SFMaps[i].type] = map.data.features)))
  

  // axios.get(`${NEXTBUS_URL}?command=vehicleLocations&a=sf-muni&r=${tag}&t=${lastTime}`)
  // .then(response => {
  //   console.log('here ', response)
  // })
}

function *watchFetchVehicleLocations(){
  yield takeEvery(actions.FETCH_VEHICLE_LOCATIONS, fetchVehicleLocations)
}

function *fetchAllVehicleLocations(){
  const res = yield call(axios.get, `${NEXT_BUS_URL}?command=vehicleLocations&a=sf-muni`)
  yield put({
    type: actions.SET_ALL_VEHICLE_LOCATIONS,
    locations: res.data
  })
  // let mapList = SFMaps.map(map => axios.get(`${SF_MAP_URL}${map.type}.json`))
  // const res = yield call(axios.all, mapList)
  // let maps = {}
  // yield all (res.map((map, i) => (maps[SFMaps[i].type] = map.data.features)))
  
  // yield put({
  //   type: actions.SET_MAP,
  //   maps
  // })
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