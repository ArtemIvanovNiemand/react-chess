import { MOVE_HORSE } from '../constants/ActionType'

const initialState = {location: [0,1]};
  
export default function horse(state = initialState, action) {
  switch (action.type) {
    case MOVE_HORSE:
      return { location: action.location }
    default:
      return state;
  }

}