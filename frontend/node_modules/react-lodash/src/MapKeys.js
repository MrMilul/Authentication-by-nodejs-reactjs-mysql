import React from 'react'
import mapKeys from 'lodash/mapKeys'

export default function MapKeys(props) {
  return props.children(mapKeys(props.object, props.iteratee))
}

MapKeys.defaultProps = {
  children: value => value
}