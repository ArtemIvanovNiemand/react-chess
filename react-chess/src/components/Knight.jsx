import React, { Component } from 'react';
import { KNIGHT_IMG, KNIGHT_BLACK_IMG, KNIGHT_DRAG_IMG } from '../constants/Figures'
import PropTypes from 'prop-types';
import { ItemTypes } from '../constants/Constants';
import { DragSource } from 'react-dnd';
import styles from '../styles/Knight.css';
import { BLACK } from '../constants/ActionType'

var dragging;

const knightSource = {
  beginDrag(props) {
    console.log(dragging);
    dragging(props.color);
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

@DragSource(ItemTypes.KNIGHT, knightSource, collect)
export default class Knight extends Component {
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
    const { connectDragSource, isDragging, color, dragTarget } = this.props;
    console.log(this.props)
    const style = isDragging ? styles.Dragging : styles.NotDragging;
    const image = (color === BLACK) ? KNIGHT_BLACK_IMG : KNIGHT_IMG;
    dragging = dragTarget;

    return connectDragSource(
      <div className={style}>
         <img src={image} className={styles.Knight} alt="neigh" />
      </div>
    );
  }
}
