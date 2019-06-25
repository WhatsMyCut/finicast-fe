/* @typescript-eslint-disable no-unused-vars */
import React, { Component } from 'react';

import { DropTarget, DropTargetMonitor } from 'react-dnd';

export interface IProps {
  _id?: string;
  name?: string;
  isSelected?: string;
  connectDropTarget?: any;
  canDrop?: boolean;
  isOver?: boolean;
  onClick?: boolean;
}

class Droppable extends Component<IProps, {}> {
  state: { mouseOver: boolean; };
  constructor( props: IProps ) {
    super( props );
    this.state = {
      mouseOver: false,
    };
  }

  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    // console.log('over', canDrop, isOver, connectDropTarget);
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
        onClick={() => this.props.onClick}
        onMouseEnter={() => { this.setState({ mouseOver: true })}}
        onMouseLeave={() => { this.setState({ mouseOver: false })}}
      >
        {this.props.children}
      </div>
    );
  }
}

export const dropTarget = {
  canDrop(props: any, monitor: any) {
    const item = monitor.getItem()
    const tcoll = monitor.targetCollect;
    console.log('canDrop', props, monitor, tcoll, item);
    return true;
  },

  drop( props: any, monitor: DropTargetMonitor, component: any ) {
    if (monitor.didDrop()) {
      return undefined;
    }

    console.log('drop', props, monitor, component);
    const item = monitor.getItem()
    var draggedId = item._id;
    if (draggedId !== props._id && props.onDrop) {
      props.onDrop( props, monitor, component );
    }
  },
  hover( props: any, monitor: DropTargetMonitor ) {
    var draggedId = monitor.getItem()._id;
    // console.log( 'hover', draggedId );
    return { _id: draggedId };
  }
};

function targetCollect( connect: any, monitor:any ) {
  return {
    connectDropTarget: connect.dropTarget(),
    canDrop: monitor.canDrop(),
    isOver: monitor.isOver(),
  };
};

export default DropTarget( 'DRAGGABLE', dropTarget, targetCollect )( Droppable );
