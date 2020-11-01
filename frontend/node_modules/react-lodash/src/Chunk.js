import React from 'react'
import chunk from 'lodash/chunk'

export default function Chunk(props) {
  return props.children(chunk(props.array, props.size))
}

Chunk.defaultProps = {
  children: value => value
}