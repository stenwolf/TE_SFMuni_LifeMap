import * as actions from './muni-actions'
const initialList = []
function muniRoutesReducer(list = initialList, action) {
  switch(action.type) {
    case actions.SET_ROUTE_LIST:
      return action.routeList.route
    default:
      return list
  }
}

export default muniRoutesReducer