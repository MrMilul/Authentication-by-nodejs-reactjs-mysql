import React from 'react'
import fill from 'lodash/fill'

export default function Fill(props) {
  return props.children(fill(props.array, props.value, props.start, props.end))
}

Fill.defaultProps = {
  children: value => value
}