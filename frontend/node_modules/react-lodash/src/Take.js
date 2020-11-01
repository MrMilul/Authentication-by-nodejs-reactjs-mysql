import React from 'react'
import take from 'lodash/take'

export default function Take(props) {
  return props.children(take(props.array, props.n))
}

Take.defaultProps = {
  children: value => value
}