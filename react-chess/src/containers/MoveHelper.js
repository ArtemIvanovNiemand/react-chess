// import { getPiece } from './Utils';

 const canMoveKnight = (positionFrom, positionTo) => {
  const [x, y] = positionFrom;
  const [toX, toY] = positionTo;

  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) || (Math.abs(dx) === 1 && Math.abs(dy) === 2);
    
};

// const canMoveRook = (positionFrom, positionTo) => {
//   const [x, y] = positionFrom;
//   const [toX, toY] = positionTo;

//   const dx = toX - x;
//   const dy = toY - y;

//   return (Math.abs(dx) === 0) || (Math.abs(dy) === 0);
// };

// const moveFunctions = {
//   ROOK: canMoveRook,
//   KNIGHT: canMoveKnight
// };

export default function canMove(from, to) {
  // let [x, y] = from;
  // let piece = getPiece(board, x, y);
  // let canMovePiece = moveFunctions[piece.name];

  return canMoveKnight(from, to);
}
