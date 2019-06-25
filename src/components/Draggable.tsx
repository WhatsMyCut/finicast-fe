import React, { Component } from 'react';
// import { FaGripVertical } from 'react-icons/fa';
import * as _ from 'lodash';

import { DragSource } from 'react-dnd';

export interface IProps {
  _id?: string;
  name?: string;
  isSelected?: string;
  connectDragPreview?: any;
  connectDragSource?: any;
  canDrop?: boolean;
  isOver?: boolean;
  onClick?: boolean;
}

class Draggable extends Component<IProps, {}> {
  state: { mouseOver: boolean; };
  constructor( props: IProps ) {
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

    return this.props.connectDragPreview(
      <div
        key={this.props._id}
        className={className}
        onClick={() => this.props.onClick}
        onMouseEnter={() => this.setState({ mouseOver: true })}
        onMouseLeave={() => this.setState({ mouseOver: false })}
        style={{ cursor: 'pointer' }}
      >
        {this.props.connectDragSource(<div>{this.props.children}</div>)}{` `}
      </div>
    );
  }
}

/**
 * Implements the drag source contract.
 */

const dragSource = {
  beginDrag( props: any ) {
    //console.log( 'beginDrag: ', props );
    return { _id: props._id };
  },
  endDrag( props: any, monitor: any, component: any ) {
    if (!monitor.didDrop()) {
      return undefined;
    };
    if (props._id && props.onDrop) {
      // console.log( 'endDrag.onDrop: ', props, monitor, component );
      return props.onDrop( props );
    }

  },
};

/**
 * Specifies the props to inject into your component.
 */
function sourceCollect( connect: any, monitor: any ) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}


export default _.flow(
  DragSource( 'DRAGGABLE', dragSource, sourceCollect ),
)( Draggable );
