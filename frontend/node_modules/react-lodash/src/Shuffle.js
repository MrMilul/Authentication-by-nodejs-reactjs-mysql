import React from 'react'
import shuffle from 'lodash/shuffle'

export default function Shuffle(props) {
  return props.children(shuffle(props.collection))
}

Shuffle.defaultProps = {
  children: value => value
}