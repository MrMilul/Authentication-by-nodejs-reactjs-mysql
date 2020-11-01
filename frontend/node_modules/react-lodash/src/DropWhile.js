import React from 'react'
import dropWhile from 'lodash/dropWhile'

export default function DropWhile(props) {
  return props.children(dropWhile(props.array, props.predicate))
}

DropWhile.defaultProps = {
  children: value => value
}