import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'

import * as horseActions from '../actions/HorseActions'
import Knight from '../components/Knight';
import BoardSquare from './BoardSquare';
import styles from '../styles/Board.css';

@DragDropContext(HTML5Backend)
@connect(mapStateToProps, mapDispatchToProps)
export default class Board extends Component {

  @autobind
  canMoveKnight(toX, toY){
    const [x, y] = this.props.location;
    const dx = toX - x;
    const dy = toY - y;

    return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
    }

renderSquare(i) {
  const x = i % 8;
  const y = Math.floor(i / 8);
  return (
    <div key={i} className={styles.BoardWrap}>
         
      <BoardSquare x={x}
                   y={y}
                   canMove={this.canMoveKnight}
                   move={this.props.horseActions.moveHorse}>
      
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
    location: state.horse.location
  }
}

function mapDispatchToProps(dispatch) {
  return {
    horseActions: bindActionCreators(horseActions, dispatch)
  }
}