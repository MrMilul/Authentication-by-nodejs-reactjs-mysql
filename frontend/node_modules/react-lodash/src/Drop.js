import React from 'react'
import drop from 'lodash/drop'

export default function Drop(props) {
  return props.children(drop(props.array, props.n))
}

Drop.defaultProps = {
  children: value => value
}