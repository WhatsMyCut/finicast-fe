/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { DropTarget } from 'react-dnd';

const propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string,
};

const defaultProps = {
    _id: '',
    name: '',
};

class Droppable extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      mouseOver: false,
    };
  }

  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    console.log('over', canDrop, isOver, connectDropTarget);
    let statusClass;
    if (this.props.isSelected) statusClass = ' drop-item-selected';
    else statusClass = ' drop-item-not-selected';

    const className = 'drop-item' + ((this.state.mouseOver || (canDrop && isOver)) ? ' drop-item-highlight' : '') + statusClass;
    const color = canDrop ? 'green': '#ccc';
    return connectDropTarget(
      <div
        key={this.props._id}
        className={className}
        style={{
          border: '1px dotted ' + color,
        }}
        onClick={this.props.onClick}
        onMouseEnter={() => { this.setState({ mouseOver: true })}}
        onMouseLeave={() => { this.setState({ mouseOver: false })}}
      >
        {this.props.children}
      </div>
    );
  }
}

Droppable.propTypes = propTypes;
Droppable.defaultProps = defaultProps;

const dropTarget = {
  drop( props, monitor, connect ) {
    var draggedId = monitor.getItem()._id;
    if (draggedId !== props._id) {
      props.onDrop( monitor.getItem(), props._id, connect );
    }
  },
  hover( props, monitor ) {
    var draggedId = monitor.getItem()._id;
    // console.log( 'hover', draggedId );
    return { _id: draggedId };
  }
};

function targetCollect( connect, monitor ) {
  return {
    connectDropTarget: connect.dropTarget(),
    canDrop: monitor.canDrop(),
    isOver: monitor.isOver(),
  };
};

export default DropTarget( 'DRAGGABLE', dropTarget, targetCollect )( Droppable );
