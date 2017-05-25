import { MOVE_HORSE } from '../constants/ActionType'

export function moveHorse(new_location) {

  return {
    type: MOVE_HORSE,
    location: new_location
  };
}
