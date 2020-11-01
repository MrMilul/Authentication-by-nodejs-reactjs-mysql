import React from 'react'
import first from 'lodash/first'

export default function First(props) {
  return props.children(first(props.array))
}

First.defaultProps = {
  children: value => value
}