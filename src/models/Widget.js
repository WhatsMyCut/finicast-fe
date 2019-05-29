import React, { Component } from 'react'
import { WidgetTypes } from './WidgetTypes';

export default class Widget extends Component {

  constructor(props) {
    super (props);
    this.type = WidgetTypes[props.type]
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
