import React from 'react'
import intersection from 'lodash/intersection'

export default function Intersection(props) {
  return props.children(intersection(props.arrays))
}

Intersection.defaultProps = {
  children: value => value
}