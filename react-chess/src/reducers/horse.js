import { MOVE_HORSE, CHANGE_FIELD } from '../constants/ActionType'

const initialState = {location: [0,0], str_location:'0,0'};
  
export default function horse(state = initialState, action) {
  switch (action.type) {
    case MOVE_HORSE:
      return { location: action.location, str_location: action.location }
    case CHANGE_FIELD:
      return { location: state.location, str_location: action.str_location }
    default:
      return state;
  }

}