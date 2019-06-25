/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import Square from './Square'
// import Widget from '../models/Widget'
import Droppable from './Droppable';

export interface IProps {
  geometry?: [number,number];
  onDrop?: any;
  className?: string;
};

export default class Grid extends Component<IProps, {}> {
  state: { };
  geometry: any;
  squares: JSX.Element[];

  constructor(props: IProps) {
    super(props)
    this.geometry = this.props.geometry;
    const total = this.geometry[0] * this.geometry[1];
    this.squares = [];
    for (let i = 0; i < total ; i++) {
      this.squares.push(this.renderSquare(i));
    }
    this.state = {};
  }

  renderSquare(i:any) {
    // const x = i % 12;
    // const y = Math.floor(i / 9);
    //const isWidgetHere = x === geometry[0] && y === geometry[1];
    const isEven = i % 2 === 1 ? 'even' : '';
    const piece = null;

    return (
      <div key={i}>
        <Droppable
          className={isEven}
          onDrop={() => this.props.onDrop}
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
