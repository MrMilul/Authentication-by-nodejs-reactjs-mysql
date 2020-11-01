import React from 'react'
import negate from 'lodash/negate'

export default function Negate(props) {
  return props.children(negate(props.predicate))
}

Negate.defaultProps = {
  children: value => value
}