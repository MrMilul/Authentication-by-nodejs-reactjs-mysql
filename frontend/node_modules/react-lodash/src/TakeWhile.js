import React from 'react'
import takeWhile from 'lodash/takeWhile'

export default function TakeWhile(props) {
  return props.children(takeWhile(props.array, props.predicate))
}

TakeWhile.defaultProps = {
  children: value => value
}