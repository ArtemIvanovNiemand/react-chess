import { MOVE_HORSE } from '../constants/ActionType'

const initialState = {location: [0,0]};
  
export default function move_horse(state = initialState, action) {

  switch (action.type) {
    case MOVE_HORSE:
      return { location: action.location };
    default:
      return state;
  }

}