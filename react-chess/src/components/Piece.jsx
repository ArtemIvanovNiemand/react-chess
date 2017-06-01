import React, { Component } from 'react';
import { KNIGHT_IMG, KNIGHT_BLACK_IMG, KNIGHT_DRAG_IMG } from '../constants/Figures'
import PropTypes from 'prop-types';
import { ItemTypes } from '../constants/Constants';
import { DragSource } from 'react-dnd';
import styles from '../styles/Piece.css';
import { BLACK } from '../constants/ActionType'

const pieceSource = {
  beginDrag(props) {
    props.startDragging(props.color, props.location);
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

@DragSource(ItemTypes.PIECE, pieceSource, collect)
export default class Piece extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  };

  componentDidMount() {
    const img = new Image();
    img.src = KNIGHT_DRAG_IMG;
    img.onload = () => this.props.connectDragPreview(img);
  }

  render() {
    const { connectDragSource, isDragging, piece } = this.props;

    const style = isDragging ? styles.Dragging : styles.NotDragging;
    const image = (piece.color === BLACK) ? KNIGHT_BLACK_IMG : KNIGHT_IMG;

    return connectDragSource(
      <div className={style}>
         <img src={image} className={styles.Piece} alt="neigh" />
      </div>
    );
  }
}
