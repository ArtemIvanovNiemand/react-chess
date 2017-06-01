import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as pieceActions from '../actions/PieceActions'
import * as draggingActions from '../actions/DraggingActions'

import Piece from '../components/Piece';
import BoardSquare from './BoardSquare';
import styles from '../styles/Board.css';
import {getPiece} from './Utils';

import canMove from './MoveHelper';

@DragDropContext(HTML5Backend)
@connect(mapStateToProps, mapDispatchToProps)
export default class Board extends Component {

renderSquare(i) {
  const x = i % 8;
  const y = Math.floor(i / 8);

  let board = this.props.board
  // let to = [x,y];

  let canMovePiece = (from, to) => canMove(board, from, to);
  return (
    <div key={i} className={styles.BoardWrap}>
         
      <BoardSquare x={x}
                   y={y}
                   dragFrom={this.props.from}
                   canMove={canMovePiece}
                   move={this.props.pieceActions.movePiece}
                   >
      
        {this.renderPiece(x, y)}
      </BoardSquare>
    </div>
  );
}

renderPiece(x, y) {
  const board = this.props.board

  const piece = getPiece(board, x, y)

  if (piece != null) {
    return <Piece 
              piece={piece} 
              location= {[x,y]} 
              startDragging={this.props.draggingActions.startDragging}
            />;
  }
}

  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div id= "Board" className={styles.Board}>
        {squares}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    board: state.board.board,
    from: state.dragging.from
  }
}

function mapDispatchToProps(dispatch) {
  return {
    draggingActions: bindActionCreators(draggingActions, dispatch),
    pieceActions: bindActionCreators(pieceActions, dispatch)
  }
}