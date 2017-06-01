export function canMovePawn(from, to, piece){
  const diff = (piece.color === 'BLACK') ? 1 : -1;
  const [x, y] = from;
  const [toX, toY] = to;

  return (x === toX) && (toY - y === diff);
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