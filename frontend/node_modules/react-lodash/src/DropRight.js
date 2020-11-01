import React from 'react'
import dropRight from 'lodash/dropRight'

export default function DropRight(props) {
  return props.children(dropRight(props.array, props.n))
}

DropRight.defaultProps = {
  children: value => value
}