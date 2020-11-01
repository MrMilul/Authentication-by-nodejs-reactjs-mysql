import React from 'react'
import delay from 'lodash/delay'

export default function Delay(props) {
  return props.children(delay(props.func, props.wait, props.args))
}

Delay.defaultProps = {
  children: value => value
}