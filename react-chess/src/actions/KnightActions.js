import { MOVE_KNIGHT, START_DRAGGING } from '../constants/ActionType'

export function moveKnight(color, to) {

  return {
    type: MOVE_KNIGHT,
    color: color,
    to: to
  };
}

export function dragTarget(color) {

  return {
    type: START_DRAGGING,
    color: color
  };
}