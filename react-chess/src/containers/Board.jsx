import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as knightActions from '../actions/KnightActions'
import Knight from '../components/Knight';
import BoardSquare from './BoardSquare';
import styles from '../styles/Board.css';

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
                   knightLocation={this.props.location}
                   WknightLocation={this.props.white_knight_location}
                   BknightLocation={this.props.black_knight_location}
                   dragTarget={this.props.drag_target}
                   move={this.props.knightActions.moveKnight}
                   >
      
        {this.renderPiece(x, y)}
      </BoardSquare>
    </div>
  );
}

renderPiece(x, y) {
  const [WknightX, WknightY] = this.props.white_knight_location;
  const [BknightX, BknightY] = this.props.black_knight_location;

  if (x === WknightX && y === WknightY) {
    return <Knight color='WHITE' dragTarget={this.props.knightActions.dragTarget} />;
  }

  if (x === BknightX && y === BknightY) {
    return <Knight color='BLACK' dragTarget={this.props.knightActions.dragTarget} />;
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
    location: state.knight.location,
    white_knight_location:state.knight.white_knight_location,
    black_knight_location:state.knight.black_knight_location,
    drag_target:state.knight.drag_target
  }
}

function mapDispatchToProps(dispatch) {
  return {
    knightActions: bindActionCreators(knightActions, dispatch)
  }
}