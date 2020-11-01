import React from 'react'
import flatMap from 'lodash/flatMap'

export default function FlatMap(props) {
  return props.children(flatMap(props.collection, props.iteratee))
}

FlatMap.defaultProps = {
  children: value => value
}