import React from 'react'
import split from 'lodash/split'

export default function Split(props) {
  return props.children(split(props.string, props.separator, props.limit))
}

Split.defaultProps = {
  children: value => value
}