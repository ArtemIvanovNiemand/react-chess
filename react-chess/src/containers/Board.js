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
                   move={this.props.knightActions.moveKnight}
                   >
      
        {this.renderPiece(x, y)}
      </BoardSquare>
    </div>
  );
}

renderPiece(x, y) {
  const [knightX, knightY] = this.props.location;

  if (x === knightX && y === knightY) {
    return <Knight />;
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
    location: state.knight.location
  }
}

function mapDispatchToProps(dispatch) {
  return {
    knightActions: bindActionCreators(knightActions, dispatch)
  }
}