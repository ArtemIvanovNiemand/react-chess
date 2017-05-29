import { MOVE_KNIGHT, CHANGE_FIELD } from '../constants/ActionType'

const initialState = {location: [0,0], str_location:'0,0'};
  
export default function knight(state = initialState, action) {
  switch (action.type) {
    case MOVE_KNIGHT:
      return { location: action.location, str_location: action.location }
    case CHANGE_FIELD:
      return { location: state.location, str_location: action.str_location }
    default:
      return state;
  }

}