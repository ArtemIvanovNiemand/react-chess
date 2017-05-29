import knight from './knight'

import { combineReducers } from 'redux'
import { postsByReddit, selectedReddit } from './reddit'

export default combineReducers({
  postsByReddit,
  selectedReddit,
  knight
})
