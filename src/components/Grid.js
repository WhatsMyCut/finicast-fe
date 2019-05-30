/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import Square from './Square'
import Widget from '../models/Widget'
import Droppable from '../components/Droppable';


export default class Grid extends Component {
  constructor(props) {
    super(props)
    this.widgetPosition = this.props.widgetposition
    this.squares = []
    for (let i = 0; i < 4 ; i++) {
      this.squares.push(this.renderSquare(i, this.widgetPosition));
    }
  }

  renderSquare(i, [ widgetX, widgetY ]) {
    const x = i % 12;
    const y = Math.floor(i / 9);
    const isWidgetHere = x === widgetX && y === widgetY;
    const isEven = i % 2 === 1 ? 'even' : '';
    const piece = isWidgetHere ? 'X' : null;

    return (
      <div key={i}>
        <Droppable
          className={isEven}
          onDrop={() => console.log('onDrop')}
        >
          <Square>{piece}</Square>
        </Droppable>
      </div>
    )
  }

  render() {
    return (
      <div
        style={{
          width: '100%',
          minHeight: '80vh',
          display: 'flex',
          flexWrap: 'wrap',
        }}
        {...this.props}
      >
        {this.squares}
      </div>
    )
  }
};
