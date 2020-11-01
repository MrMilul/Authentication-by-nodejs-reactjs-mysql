import React from 'react'
import random from 'lodash/random'

export default function Random(props) {
  return props.children(random(props.lower, props.upper, props.floating))
}

Random.defaultProps = {
  children: value => value
}