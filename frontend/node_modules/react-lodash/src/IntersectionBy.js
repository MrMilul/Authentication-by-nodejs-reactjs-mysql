import React from 'react'
import intersectionBy from 'lodash/intersectionBy'

export default function IntersectionBy(props) {
  return props.children(intersectionBy(props.arrays, props.iteratee))
}

IntersectionBy.defaultProps = {
  children: value => value
}