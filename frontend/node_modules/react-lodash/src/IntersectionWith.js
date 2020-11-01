import React from 'react'
import intersectionWith from 'lodash/intersectionWith'

export default function IntersectionWith(props) {
  return props.children(intersectionWith(props.arrays, props.comparator))
}

IntersectionWith.defaultProps = {
  children: value => value
}