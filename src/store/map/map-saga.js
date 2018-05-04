import axios from 'axios'
import { call, put, takeEvery, all } from 'redux-saga/effects'
import * as actions from './map-actions.js'
import { SF_MAP_URL, SFMaps } from '../../config'


function *fetchMap() {
  //iterate through all maps and append each of them 
  //then pass the new object to the reducer to distribute back to component to render map
  let mapList = SFMaps.map(map => axios.get(`${SF_MAP_URL}${map.type}.json`))
  const res = yield call(axios.all, mapList)
  let maps = {}
  yield all (res.map((map, i) => (maps[SFMaps[i].type] = map.data.features)))
  
  yield put({
    type: actions.SET_MAP,
    maps
  })
}

function *watchFetchMap() {
  yield takeEvery(actions.FETCH_MAP, fetchMap)
}

export function *mapSaga() {
  yield all([
    watchFetchMap()
  ])
}