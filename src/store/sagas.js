import { all } from 'redux-saga/effects'
import { muniSaga } from './muni/muni-saga'
import { mapSaga } from './map/map-saga'

const sagas = function *rootSaga() {
  yield all([
    muniSaga(),
    mapSaga()
  ])
}

export default [
  sagas
]