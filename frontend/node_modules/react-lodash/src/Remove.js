import React from 'react'
import remove from 'lodash/remove'

export default function Remove(props) {
  return props.children(remove(props.array, props.predicate))
}

Remove.defaultProps = {
  children: value => value
}