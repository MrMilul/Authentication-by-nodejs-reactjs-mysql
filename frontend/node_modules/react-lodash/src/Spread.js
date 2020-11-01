import React from 'react'
import spread from 'lodash/spread'

export default function Spread(props) {
  return props.children(spread(props.func, props.start))
}

Spread.defaultProps = {
  children: value => value
}