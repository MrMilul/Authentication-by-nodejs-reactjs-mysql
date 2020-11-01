import React from 'react'
import attempt from 'lodash/attempt'

export default function Attempt(props) {
  return props.children(attempt(props.func, props.args))
}

Attempt.defaultProps = {
  children: value => value
}