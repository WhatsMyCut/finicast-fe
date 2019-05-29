import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaGripVertical } from 'react-icons/fa';
import * as _ from 'lodash';

import { DragSource, DropTarget } from 'react-dnd';

const propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string,
};

const defaultProps = {
    _id: '',
    name: '',
};

class Draggable extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            mouseOver: false,
        };
    }

    render() {
      let statusClass;
      if (this.props.isSelected) statusClass = ' drag-item-selected';
      else statusClass = ' drag-item-not-selected';

      const className = 'drag-item' + ((this.state.mouseOver || (this.props.canDrop && this.props.isOver)) ? ' drag-item-highlight' : '') + statusClass;

      return this.props.connectDropTarget(this.props.connectDragPreview(
        <div
          key={this.props._id}
          className={className}
          onClick={this.props.onClick}
          onMouseEnter={() => this.setState({ mouseOver: true })}
          onMouseLeave={() => this.setState({ mouseOver: false })}
          style={{ borderLeft: '4px solid ' + this.props.color, cursor: 'pointer' }}
        >
          {this.props.connectDragSource(<span><FaGripVertical /></span>)}{` `}
          {this.props.children}
        </div>
      ));
    }
}

Draggable.propTypes = propTypes;
Draggable.defaultProps = defaultProps;

/**
 * Implements the drag source contract.
 */

const dragSource = {
    beginDrag( props ) {
        console.log( 'props: ', props );
        return { _id: props._id };
    },
    //endDrag( props, monitor, component ) {
        //console.log( 'props: ', props );
        //console.log( 'monitor.getItem(): ', monitor.getItem() );
        //console.log( 'monitor.getDropResult(): ', monitor.getDropResult() );
        //console.log( 'component: ', component );
        //props.moveRow( monitor.getItem()._id, props._id, true );
    //},
};


const dropTarget = {
    drop( props, monitor ) {
        var draggedId = monitor.getItem()._id;
        //console.log( 'hover', draggedId, props._id );
        if (draggedId !== props._id) {
            props.onReorder( draggedId, props._id, true );
        }
    },
    /*drop( props, monitor ) {
        var draggedId = monitor.getItem()._id;
        console.log( 'drop', draggedId, props._id );
        return { _id: draggedId };
    }*/
};

/**
 * Specifies the props to inject into your component.
 */
function sourceCollect( connect, monitor ) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

function targetCollect( connect, monitor ) {
  return {
    connectDropTarget: connect.dropTarget(),
    canDrop: monitor.canDrop(),
    isOver: monitor.isOver(),
  };
};

export default _.flow(
    DragSource( 'DRAG_SOURCE', dragSource, sourceCollect ),
    DropTarget( 'DRAG_TARGET', dropTarget, targetCollect ),
)( Draggable );
