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
    let statusClass;
    if (this.props.isSelected) statusClass = ' drop-item-selected';
    else statusClass = ' drop-item-not-selected';

    const className = 'drop-item' + ((this.state.mouseOver || (this.props.canDrop && this.props.isOver)) ? ' drop-item-highlight' : '') + statusClass;

    return this.props.connectDropTarget(
      <div
        key={this.props._id}
        className={className}
        onClick={this.props.onClick}
        onMouseEnter={() => this.setState({ mouseOver: true })}
        onMouseLeave={() => this.setState({ mouseOver: false })}
      >
        {this.props.children}
      </div>
    );
  }
}

Droppable.propTypes = propTypes;
Droppable.defaultProps = defaultProps;

const dropTarget = {
  hover( props, monitor ) {
    console.log( 'hover', props._id );
    var draggedId = monitor.getItem()._id;
    if (draggedId !== props._id) {
      props.onReorder( draggedId, props._id, true );
    }
  },
  drop( props, monitor ) {
    console.log( 'drop', props._id );
    var draggedId = monitor.getItem()._id;
    return { _id: draggedId };
  }
};

function targetCollect( connect, monitor ) {
  if (monitor && connect) {
    console.log('HERE', monitor)
  }
  return {
    connectDropTarget: connect.dropTarget(),
    canDrop: monitor.canDrop(),
    isOver: monitor.isOver(),
  };
};

export default DropTarget( 'DROP_TARGET', dropTarget, targetCollect )( Droppable );
