import React from 'react'
import toLength from 'lodash/toLength'

export default function ToLength(props) {
  return props.children(toLength(props.value))
}

ToLength.defaultProps = {
  children: value => value
}