/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import Square from './Square'
import Widget from '../models/Widget'


export default class Grid extends Component {
  constructor(props) {
    super(props)
    this.widgetPosition = this.props.widgetPosition
    this.squares = []
    for (let i = 0; i < 72; i++) {
      this.squares.push(this.renderSquare(i, this.widgetPosition));
    }
  }

  renderSquare(i, [ widgetX, widgetY ]) {
    const x = i % 12;
    const y = Math.floor(i / 9);
    const isWidgetHere = x === widgetX && y === widgetY;
    const color = ((x + y) % 2 === 1) ? 'grey': null;
    const piece = isWidgetHere ? 'X' : null;

    return (
      <div key={i} className={"grid-square"}>
        <Square color={color}>{piece}</Square>
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
