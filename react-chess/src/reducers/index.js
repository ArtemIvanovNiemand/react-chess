import { combineReducers } from 'redux'

import dragging from './dragging'
import board from './board'

export default combineReducers({
  board,
  dragging
})
