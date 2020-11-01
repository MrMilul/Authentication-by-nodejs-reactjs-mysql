import React from 'react'
import range from 'lodash/range'

export default function Range(props) {
  return props.children(range(props.start, props.end, props.step))
}

Range.defaultProps = {
  children: value => value
}