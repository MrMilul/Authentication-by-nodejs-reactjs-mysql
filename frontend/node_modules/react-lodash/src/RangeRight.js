import React from 'react'
import rangeRight from 'lodash/rangeRight'

export default function RangeRight(props) {
  return props.children(rangeRight(props.start, props.end, props.step))
}

RangeRight.defaultProps = {
  children: value => value
}