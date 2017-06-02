import { isSameCell, isSameColor, getPiece } from './Utils';
import { canMovePawn,
         canMoveKnight,
         canMoveRook,
         canMoveBishop,
         canMoveQueen ,
         canMoveKing
       } from './MoveFunctions';

const moveFunctions = {
  PAWN: canMovePawn,
  KNIGHT: canMoveKnight,
  ROOK: canMoveRook,
  BISHOP: canMoveBishop,
  QUEEN: canMoveQueen,
  KING: canMoveKing
};

export default function canMove(board, from, to) {
  if(isSameCell(from, to)) return false;
  if(isSameColor(board, from, to)) return false;

  let [x, y] = from;
  let piece = getPiece(board, x, y);
  if(piece === null) return false;
  
  let canMovePiece = moveFunctions[piece.name];
  return canMovePiece(from, to, board);
}
