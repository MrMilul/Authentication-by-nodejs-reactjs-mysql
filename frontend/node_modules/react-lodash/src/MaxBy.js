import React from 'react'
import maxBy from 'lodash/maxBy'

export default function MaxBy(props) {
  return props.children(maxBy(props.array, props.iteratee))
}

MaxBy.defaultProps = {
  children: value => value
}