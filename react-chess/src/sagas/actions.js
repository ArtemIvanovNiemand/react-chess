import { createAction } from 'redux-act';

export const logout = createAction('logout');



export const setBoard = createAction('SET_BOARD');
export const pieceWasMoved = createAction('PIECE_WAS_MOVED');
