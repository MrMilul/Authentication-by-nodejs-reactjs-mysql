import React from 'react'
import mean from 'lodash/mean'

export default function Mean(props) {
  return props.children(mean(props.array))
}

Mean.defaultProps = {
  children: value => value
}