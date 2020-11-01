import React from 'react'
import unionWith from 'lodash/unionWith'

export default function UnionWith(props) {
  return props.children(unionWith(props.arrays, props.comparator))
}

UnionWith.defaultProps = {
  children: value => value
}