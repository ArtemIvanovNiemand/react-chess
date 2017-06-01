import { MOVE_PIECE, START_DRAGGING, PIECE_WAS_MOVED } from '../constants/ActionType'

export function movePiece(from, to) {

  return {
    type: MOVE_PIECE,
    from:from,
    to: to
  };
}

export function pieceWasMoved(to, from) {

  return {
    type: PIECE_WAS_MOVED,
    from:from,
    to: to
  };
}

export function startDragging(color, from) {

  return {
    type: START_DRAGGING,
    color: color,
    from: from
  };
}