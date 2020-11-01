import React from 'react'
import functions from 'lodash/functions'

export default function Functions(props) {
  return props.children(functions(props.object))
}

Functions.defaultProps = {
  children: value => value
}