import React from 'react'
import map from 'lodash/map'

export default function Map(props) {
  return props.children(map(props.collection, props.iteratee))
}

Map.defaultProps = {
  children: value => value
}