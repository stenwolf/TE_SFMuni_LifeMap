export const NEXT_BUS_URL = 'http://webservices.nextbus.com/service/publicJSONFeed'
export const SF_MAP_URL ='sfmaps/'
export const SF_COORDINATES = [-122.4194, 37.7749]
export const SCALE = 200000
export const SYNC_INTERVAL = 15000
// export const SFMaps = ['arteries', 'freeways', 'neighborhoods', 'streets']
export const SFMaps = [
  {type: 'neighborhoods', stroke: '#000', strokeWidth: 0.5, fill: 'rgba(237,237,237,1)'},
  {type: 'streets', stroke: '#fff', strokeWidth: 1, fill: 'rgba(50,170,50,0.5)'},
  {type: 'arteries', stroke: '#ffac3f', strokeWidth: 0.2, fill: 'rgba(255,251,58,0.5)'},
  {type: 'freeways', stroke: '#ffac3f', strokeWidth: 0.2, fill: 'rgba(255,251,58,0.5)'}
  
]

