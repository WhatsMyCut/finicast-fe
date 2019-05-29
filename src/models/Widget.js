import React from 'react'
import { DragSource } from 'react-dnd'
import { WidgetTypes } from './WidgetTypes';

const widgetSource = {
  beginDrag(props) {
    return {}
  },
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }
}

function Widget({ connectDragSource, isDragging }) {
  return connectDragSource(
    <div
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
      }}
    >
      ♘
    </div>,
  )
}

export default DragSource(WidgetTypes.CELL, widgetSource, collect)(Widget)
