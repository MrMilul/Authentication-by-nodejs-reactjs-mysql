import React from 'react'
import iteratee from 'lodash/iteratee'

export default function Iteratee(props) {
  return props.children(iteratee(props.func))
}

Iteratee.defaultProps = {
  children: value => value
}