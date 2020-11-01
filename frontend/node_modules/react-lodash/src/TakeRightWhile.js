import React from 'react'
import takeRightWhile from 'lodash/takeRightWhile'

export default function TakeRightWhile(props) {
  return props.children(takeRightWhile(props.array, props.predicate))
}

TakeRightWhile.defaultProps = {
  children: value => value
}