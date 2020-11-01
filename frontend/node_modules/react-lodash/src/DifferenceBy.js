import React from 'react'
import differenceBy from 'lodash/differenceBy'

export default function DifferenceBy(props) {
  return props.children(differenceBy(props.array, props.values, props.iteratee))
}

DifferenceBy.defaultProps = {
  children: value => value
}