import * as Constants from './Constants';
import Piece from './Piece';


export default class Board {
  constructor() {
    this.array = new Array(64);

    this.fillRow(Constants.WHITE);
    this.setPawns(Constants.WHITE);

    this.fillRow(Constants.BLACK);
    this.setPawns(Constants.BLACK);
  }

  setPiece(x, y, piece) {
    this.array[x * 8 + y] = piece;
  }

  getPiece(x, y) {
    return this.array[x * 8 + y];
  }

  movePiece(from, to) {
    const [fromX, fromY] = from
    const [toX, toY] = to

    const fromLine = 8 * fromX + fromY
    const toLine = 8 * toX + toY

    let piece = this.array[fromLine];
    piece.wasMoved = true;
    
    this.array[fromLine] = undefined;
    this.array[toLine] = piece;
  }

  fillRow(color) {
    let y = (color === Constants.BLACK) ? 0 : 7;
    let pieces = Constants.PIECES;

    for (let x = 0; x < 8; x++) {
      let piece = new Piece(pieces[x], color)
      this.setPiece(x, y, piece);
    }
  }

  setPawns(color) {
    let y = (color === Constants.BLACK) ? 1 : 6;

    for (let x = 0; x < 8; x++) {
      let piece = new Piece(Constants.PAWN, color)
      this.setPiece(x, y, piece);
    }
  }
}
