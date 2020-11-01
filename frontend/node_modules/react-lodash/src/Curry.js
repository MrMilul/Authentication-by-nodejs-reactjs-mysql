import React from 'react'
import curry from 'lodash/curry'

export default function Curry(props) {
  return props.children(curry(props.func, props.arity))
}

Curry.defaultProps = {
  children: value => value
}