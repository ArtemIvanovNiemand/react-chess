import React, { Component } from 'react';
import Knight from './Knight';
import BoardSquare from './BoardSquare';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as horseActions from '../actions/HorseActions'

@DragDropContext(HTML5Backend)
@connect(mapStateToProps, mapDispatchToProps)
export default class Board extends Component {

renderSquare(i) {

   const canMoveKnight = (toX, toY) => {
    const [x, y] = this.props.location;
    const dx = toX - x;
    const dy = toY - y;

    return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
  };

  const x = i % 8;
  const y = Math.floor(i / 8);
  return (
    <div key={i}
         style={{ width: '12.5%', height: '12.5%' }}>
      <BoardSquare x={x}
                   y={y}
                   canMove={canMoveKnight}
                   move={this.props.horseActions.moveHorse}
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
      <div style={{
        width: '500',
        height: '500',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
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