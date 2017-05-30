import { MOVE_KNIGHT, WHITE, START_DRAGGING, KNIGHT_WAS_MOVED } from '../constants/ActionType'

const initialState = {
	white_knight_location: [0,0],
	black_knight_location:[0,1],
	location:[1,1],
	drag_target: undefined};
  
export default function knight(state = initialState, action) {
  switch (action.type) {
    case KNIGHT_WAS_MOVED:
    case MOVE_KNIGHT:
    if(action.color === WHITE ){
      return {...state, white_knight_location: action.to }
    }
    else{
      return {...state, black_knight_location: action.to }
    }

    case START_DRAGGING: return {...state, drag_target:action.color }
    default:
      return state;
  }

}