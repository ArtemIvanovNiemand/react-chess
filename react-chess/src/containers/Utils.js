// export const canMoveKnight = (positionFrom, positionTo) => {
//   const [x, y] = positionFrom;
//   const [toX, toY] = positionTo;

//   const dx = toX - x;
//   const dy = toY - y;

//   return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
//     (Math.abs(dx) === 1 && Math.abs(dy) === 2);
// };

export function getPiece(arr, x, y) {
	if (arr == null) return null;

	return arr[x * 8 + y];
}

// export default canMoveKnight;


export function isSameCell(from, to) {
	const [x, y] = from;
	const [toX, toY] = to;
	return (x === toX) && (y === toY);
}

export function isSameColor(board, from, to) {
	const [x, y] = from;
	const [toX, toY] = to;

	const fromPiece = getPiece(board, x, y);
	const toPiece = getPiece(board, toX, toY);

	if(fromPiece === null || toPiece === null) return false;
	return (fromPiece.color === toPiece.color);
}