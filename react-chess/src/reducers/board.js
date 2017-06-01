import { MOVE_PIECE, START_DRAGGING } from '../constants/ActionType'

const initialState = {
  board: undefined
};

export default function board(state = initialState, action) {
  switch (action.type) {
    case 'SET_BOARD':
      {

        return {...state, board: action.payload.array }
      }

    case MOVE_PIECE:{
      let new_board = {...state.board}
      let {from, to} = action
      let fromLine = from[0]*8 + from[1];
      let toLine = to[0]*8 + to[1];

      let piece = new_board[fromLine]

      new_board[fromLine] = null;
      new_board[toLine] = piece
      

      return {...state, board: new_board }
    }

    case 'PIECE_WAS_MOVED':{
      return {...state, board: action.payload.array}
    }

    case START_DRAGGING:{
      return {...state, from: action.from, color: action.color }
    }

    default:
      return state;
  }

}
