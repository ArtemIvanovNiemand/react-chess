import { getPiece, CanMovePawn } from './Utils';

export function canMovePawn(from, to, board){
  const [x, y] = from;
  const [toX, toY] = to; 

  const fromPiece = getPiece(board, x, y);
  const toPiece = getPiece(board, toX, toY);

  const diff = (fromPiece.color === 'BLACK') ? 1 : -1;

  const con1 = (x === toX) && (toY - y === diff) && (toPiece === null);
  const con2 = (Math.abs(toX - x) === 1) && 
               (toY - y === diff) && 
               (!CanMovePawn(board, from, to));

  return con1 || con2;
}

export function canMoveKnight(from, to){
  const [x, y] = from;
  const [toX, toY] = to;

  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
  (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}

export function canMoveRook(from, to){
  const [x, y] = from;
  const [toX, toY] = to;

  return (x === toX) || (y === toY);
}

export function canMoveBishop(from, to){
  const [x, y] = from;
  const [toX, toY] = to;

  const dx = toX - x;
  const dy = toY - y;

  return Math.abs(dx) === Math.abs(dy);
}

export function canMoveQueen(from, to){

  return canMoveBishop(from, to) && canMoveBishop(from, to);
}

export function canMoveKing(from, to){
  const [x, y] = from;
  const [toX, toY] = to;

  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) <= 1) && (Math.abs(dy) <= 1);
}