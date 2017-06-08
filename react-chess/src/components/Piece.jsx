import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from 'constants/Constants';
import { DragSource } from 'react-dnd';
import styles from 'styles/Piece.css';
import { getPieceImg } from './PieceHelper'

const pieceSource = {
  beginDrag(props) {
    let color = props.piece.color;
    let location = props.location;
    props.startDragging({color:color, location:location});
    
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
    img.src = getPieceImg(this.props.piece);
    img.onload = () => this.props.connectDragPreview(img);
  }

  render() {
    const { connectDragSource, isDragging, piece } = this.props;

    const style = isDragging ? styles.Dragging : styles.NotDragging;
    const image = getPieceImg(piece);

    return connectDragSource(
      <div className={style}>
         <img src={image} className={styles.Piece} alt="neigh" />
      </div>
    );
  }
}
