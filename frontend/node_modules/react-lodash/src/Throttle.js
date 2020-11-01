import React from 'react'
import throttle from 'lodash/throttle'

export default function Throttle(props) {
  return props.children(throttle(props.func, props.wait, props.options))
}

Throttle.defaultProps = {
  children: value => value
}