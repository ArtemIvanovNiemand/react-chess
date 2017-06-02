export function getPiece(arr, x, y) {
	if (arr == null) return null;

	return arr[x * 8 + y];
}

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

export function CanMovePawn(board, from, to) {
	const [x, y] = from;
	const [toX, toY] = to;

	const fromPiece = getPiece(board, x, y);
	const toPiece = getPiece(board, toX, toY);

	if(fromPiece === null || toPiece === null) return true;
	return (fromPiece.color === toPiece.color);
}