import React, { Component} from 'react'

export default class Square extends Component  {
  constructor(props) {
    super(props);
    console.log('Square', this.props)
  }
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
