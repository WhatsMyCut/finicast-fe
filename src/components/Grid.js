import React, { Component } from 'react'
import Square from './Square'
import Widget from '../models/Widget'


export default class Grid extends Component {
  constructor(props) {
    super(props)
    this.widgetPosition = this.props.widgetPosition
    this.squares = []
    for (let i = 0; i < 64; i++) {
      this.squares.push(this.renderSquare(i, this.widgetPosition));
    }
  }

  renderSquare(i, [ widgetX, widgetY ]) {
    const x = i % 12;
    const y = Math.floor(i / 9);
    const isWidgetHere = x === widgetX && y === widgetY;
    const black = (x + y) % 2 === 1;
    const piece = isWidgetHere ? <Widget /> : null;

    return (
      <div key={i} style={{ width: '8%', height: '12.5%' }}>
        <Square black={black}>{piece}</Square>
      </div>
    )
  }

  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {this.squares}
      </div>
    )
  }
};
