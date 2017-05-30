import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from '../components/Square';
import { ItemTypes } from '../constants/Constants';
import { DropTarget } from 'react-dnd';
import styles from '../styles/BoardSquare.css';
import { canMoveKnight } from './Utils';
import { BLACK } from '../constants/ActionType'

var moveKnight;

const squareTarget = {
  canDrop(props) {
    if(props.dragTarget === BLACK){
       return canMoveKnight(props.BknightLocation, [props.x, props.y]);
    }
    else{
       return canMoveKnight(props.WknightLocation, [props.x, props.y]);
    }
  },

  drop(props) {
    let from = (props.dragTarget === BLACK)? props.BknightLocation : props.WknightLocation ;
     moveKnight(props.dragTarget, [props.x, props.y], from);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

@DropTarget(ItemTypes.KNIGHT, squareTarget, collect)
export default class BoardSquare extends Component {
  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired
  };

  renderOverlay(color) {
    switch (color) {
      case 'green': return (<div className={styles.BoardSquareOverlayGreen}/>);
      case 'yellow': return (<div className={styles.BoardSquareOverlayYellow}/>);
      case 'red': return (<div className={styles.BoardSquareOverlayRed}/>);
    }
  }

  render() {
    const { x, y, move, connectDropTarget, isOver, canDrop } = this.props;
    moveKnight = move;
    
    const black = (x + y) % 2 === 1;

    return connectDropTarget(
      <div className={styles.ConnectDropTarget}>
        <Square black={black}>
          {this.props.children}
        </Square>
        {isOver && !canDrop && this.renderOverlay('red')}
        {!isOver && canDrop && this.renderOverlay('yellow')}
        {isOver && canDrop && this.renderOverlay('green')}
      </div>
    );
  }
}