import React from 'react'
import dropRightWhile from 'lodash/dropRightWhile'

export default function DropRightWhile(props) {
  return props.children(dropRightWhile(props.array, props.predicate))
}

DropRightWhile.defaultProps = {
  children: value => value
}