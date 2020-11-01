import React from 'react'
import toArray from 'lodash/toArray'

export default function ToArray(props) {
  return props.children(toArray(props.value))
}

ToArray.defaultProps = {
  children: value => value
}