import React from 'react'
import mapValues from 'lodash/mapValues'

export default function MapValues(props) {
  return props.children(mapValues(props.object, props.iteratee))
}

MapValues.defaultProps = {
  children: value => value
}