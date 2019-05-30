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
    const { canDrop, isOver, connectDropTarget, children } = this.props;
<<<<<<< HEAD
    // console.log('over', canDrop, isOver, connectDropTarget);
=======
    console.log('over', canDrop, isOver, connectDropTarget);
>>>>>>> a36689e57fd9a29ee7029d1be093c7f593ace11d
    let statusClass;
    if (this.props.isSelected) statusClass = ' drop-item-selected';
    else statusClass = ' drop-item-not-selected';

    const className = 'drop-item' + ((this.state.mouseOver || (canDrop && isOver)) ? ' drop-item-highlight' : '') + statusClass;
    const color = canDrop ? 'green': children.length ? 'red' : '#ccc';
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
  canDrop( props, monitor) {
    var draggedId = monitor.getItem()._id;
    if (draggedId !== props._id && props.onCanDrop) {
      props.onCanDrop( monitor.getItem(), props._id, );
    }
  },
  drop( props, monitor, component ) {
    var draggedId = monitor.getItem()._id;
    if (draggedId !== props._id && props.onDrop) {
      props.onDrop( monitor.getItem(), props._id, component );
    }
  },
  hover( props, monitor, component ) {
    var draggedId = monitor.getItem()._id;
    if (draggedId !== props._id && props.onHover) {
      props.onHover( monitor.getItem(), props._id, component );
    }
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
