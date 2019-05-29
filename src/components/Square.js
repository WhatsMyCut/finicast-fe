import React, { Component} from 'react'

export default class Square extends Component  {
  render () {
    const { color, children } = this.props;
    const fill = color ? 'grey' : 'transparent'
    const stroke = color ? color : 'grey'

    return (
      <div
        style={{
          backgroundColor: fill,
          color: stroke,
          width: '100%',
          height: '100%',
        }}
        {...this.props}
      >
        { children }
      </div>
    )
  }
}
