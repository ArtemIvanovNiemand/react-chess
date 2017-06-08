import { createAction } from 'redux-act';

export const movePiece = createAction('MOVE_PIECE');
export const pieceWasMoved = createAction('PIECE_WAS_MOVED');
export const setBoard = createAction('SET_BOARD');
export const logout = createAction('logout');
