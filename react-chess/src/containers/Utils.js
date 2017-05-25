export const canMoveKnight = (positionFrom, positionTo) => {
  const [ x, y ] = positionFrom;
  const [ toX, toY ] = positionTo;
  
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2);
};

export default canMoveKnight;