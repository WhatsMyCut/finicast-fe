import React, { Component } from 'react'

export interface IProps {
  color?: string;
};

export default class Square extends Component<IProps, {}>  {

  render () {
    const { color, children } = this.props;
    const fill = color ? 'grey' : 'transparent'
    return (
      <div
        style={{
          backgroundColor: fill,
          color: 'red',
          width: '100%',
          height: 'auto',
        }}
        {...this.props}
      >
        { children }
      </div>
    )
  }
}
