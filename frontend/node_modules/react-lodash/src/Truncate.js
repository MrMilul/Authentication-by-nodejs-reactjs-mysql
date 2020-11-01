import React from 'react'
import truncate from 'lodash/truncate'

export default function Truncate(props) {
  return props.children(truncate(props.string, props.options))
}

Truncate.defaultProps = {
  children: value => value
}