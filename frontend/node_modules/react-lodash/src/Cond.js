import React from 'react'
import cond from 'lodash/cond'

export default function Cond(props) {
  return props.children(cond(props.pairs))
}

Cond.defaultProps = {
  children: value => value
}