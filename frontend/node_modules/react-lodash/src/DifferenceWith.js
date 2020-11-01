import React from 'react'
import differenceWith from 'lodash/differenceWith'

export default function DifferenceWith(props) {
  return props.children(differenceWith(props.array, props.values, props.comparator))
}

DifferenceWith.defaultProps = {
  children: value => value
}