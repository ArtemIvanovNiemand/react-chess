import * as Constants from './Constants';
import Piece from './Piece';


export default class Board {
  constructor() {
    this.array = new Array(64);

    this.setPiece(0,0, new Piece(Constants.KNIGHT, Constants.WHITE));
		this.setPiece(7,7, new Piece(Constants.KNIGHT, Constants.BLACK));
  }

  setPiece(x, y, piece) {
    this.array[x * 8 + y] = piece;
  }

  getPiece(x,y){
  	return this.array[x * 8 + y];
  }

  movePiece(from, to){
  	const [fromX, fromY] = from
  	const [toX, toY] = to

  	const fromLine = 8 * fromX + fromY
		const toLine = 8 * toX + toY

  	let piece = this.array[fromLine];
		this.array[fromLine] = undefined;
		this.array[toLine] = piece;
  }
}
