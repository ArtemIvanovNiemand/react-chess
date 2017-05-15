import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ItemTypes, DefaultKnightUrl, DragKnightUrl } from './Constants';
import { DragSource } from 'react-dnd';

const knightSource = {
  beginDrag(props) {
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


class Knight extends Component {
	componentDidMount() {
  	const img = new Image();
  	img.src = DragKnightUrl;
    img.onload = () => this.props.connectDragPreview(img);
	}

  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
        
      <img src={DefaultKnightUrl} style={{ width: '100%'}}/>
      </div>
    );
  }
}

Knight.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);