import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import * as pieceActions from '../actions/PieceActions'

import Piece from '../components/Piece';
import BoardSquare from './BoardSquare';
import styles from '../styles/Board.css';

 import {getPiece} from './Utils';

@DragDropContext(HTML5Backend)
@connect(mapStateToProps, mapDispatchToProps)
export default class Board extends Component {

renderSquare(i) {
  const x = i % 8;
  const y = Math.floor(i / 8);
  return (
    <div key={i} className={styles.BoardWrap}>
         
      <BoardSquare x={x}
                   y={y}
                   dragFrom={this.props.from}
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
    return <Piece piece={piece} location= {[x,y]} startDragging={this.props.pieceActions.startDragging}/>;
  }


  // if (x === WknightX && y === WknightY) {
  //   console.log(this.props.board)
  //   return <Knight color='WHITE' dragTarget={this.props.knightActions.dragTarget} />;
  // }

  // if (x === BknightX && y === BknightY) {
  //   return <Knight color='BLACK' dragTarget={this.props.knightActions.dragTarget} />;
  // }
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
    // location: state.knight.location,
    // white_knight_location:state.knight.white_knight_location,
    // black_knight_location:state.knight.black_knight_location,
    // drag_target:state.knight.drag_target,
    board: state.board.board,
    from: state.board.from
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // knightActions: bindActionCreators(knightActions, dispatch),
    pieceActions: bindActionCreators(pieceActions, dispatch)
  }
}