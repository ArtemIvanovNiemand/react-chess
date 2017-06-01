import { createReducer } from 'redux-act';
import { movePiece, pieceWasMoved, setBoard } from '../actions/PieceActions';

const initialState = {
  board: undefined
};

const board = createReducer({
  [setBoard]: (state, payload) => {
    return {...state, board: payload.array };
  },
  [movePiece]: (state, payload) => {
    let new_board = {...state.board }
    let { from, to } = payload
    let fromLine = from[0] * 8 + from[1];
    let toLine = to[0] * 8 + to[1];

    let piece = new_board[fromLine];

    new_board[fromLine] = null;
    new_board[toLine] = piece;

    return {...state, board: new_board };
  },

  [pieceWasMoved]: (state, payload) => {
    return {...state, board: payload.array };
  },
}, initialState);

export default board;
