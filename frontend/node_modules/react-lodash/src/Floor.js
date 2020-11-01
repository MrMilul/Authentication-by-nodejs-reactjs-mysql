import React from 'react'
import floor from 'lodash/floor'

export default function Floor(props) {
  return props.children(floor(props.number, props.precision))
}

Floor.defaultProps = {
  children: value => value
}