import { MOVE_KNIGHT } from '../constants/ActionType'

export function moveKnight(new_location) {

  return {
    type: MOVE_KNIGHT,
    location: new_location
  };
}
