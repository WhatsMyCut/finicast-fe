/* @typescript-eslint-disablle no-unused-vars */
import React, { Component } from 'react'
//import { WidgetTypes } from './WidgetTypes';

export interface IProps {
  type?: any;
};

export default class Widget extends Component<IProps, {}> {
  type: string;

  constructor(props: IProps) {
    super (props);
    this.type = props.type;
  }

  render() {
    return (
      <div
        style={{
          fontSize: 36,
          fontWeight: 'bold',
        }}
      >
        ♘ {this.type}
      </div>
    );
  }
}
