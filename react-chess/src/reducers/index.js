import horse from './horse'

import { combineReducers } from 'redux'
import { postsByReddit, selectedReddit } from './reddit'

export default combineReducers({
  postsByReddit,
  selectedReddit,
  horse
})
