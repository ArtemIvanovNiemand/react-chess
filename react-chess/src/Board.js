import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import PropTypes from 'prop-types';
import BoardSquare from './BoardSquare';
import Knight from './Knight';
import { connect } from 'react-redux'


class Board extends Component {
  renderSquare(i) {
  const x = i % 8;
  const y = Math.floor(i / 8);
  return (
    <div key={i}
         style={{ width: '12.5%', height: '12.5%' }}>
      <BoardSquare x={x}
                   y={y}>
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

function mapStateToProps (state) {
  return {
    location: state
  }
}

export default connect(mapStateToProps)(DragDropContext(HTML5Backend)(Board));