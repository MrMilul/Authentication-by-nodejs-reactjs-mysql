import React from 'react'
import minBy from 'lodash/minBy'

export default function MinBy(props) {
  return props.children(minBy(props.array, props.iteratee))
}

MinBy.defaultProps = {
  children: value => value
}