import React from 'react'
import unionBy from 'lodash/unionBy'

export default function UnionBy(props) {
  return props.children(unionBy(props.arrays, props.iteratee))
}

UnionBy.defaultProps = {
  children: value => value
}