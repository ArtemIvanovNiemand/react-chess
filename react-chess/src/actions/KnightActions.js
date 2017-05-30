import { MOVE_KNIGHT, START_DRAGGING, KNIGHT_WAS_MOVED } from '../constants/ActionType'

export function moveKnight(color, to, from) {

  return {
    type: MOVE_KNIGHT,
    color: color,
    from:from,
    to: to
  };
}

export function KnightWasMoved(color, to, from) {

  return {
    type: KNIGHT_WAS_MOVED,
    color: color,
    from:from,
    to: to
  };
}

export function dragTarget(color) {

  return {
    type: START_DRAGGING,
    color: color
  };
}