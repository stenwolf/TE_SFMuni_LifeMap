import * as actions from './muni-actions'
const initialList = []
function muniSelectedRoutesReducer(list = initialList, action) {
  switch(action.type) {
    case actions.SET_SELECTED_ROUTES:      
      const index = list.indexOf(action.routeTag)  
      let selectedList = list.slice() //work on a copy so we dont modify the array/state directly
      //logic to add/remove routes from selected routes
      if(index > -1){
        selectedList.splice(index, 1)        
      }
      else{
        selectedList.splice(index, 0, action.routeTag)
      }
      return selectedList
    default:
      return list
  }
}

export default muniSelectedRoutesReducer