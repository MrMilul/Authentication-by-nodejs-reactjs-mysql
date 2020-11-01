import React from 'react'
import sum from 'lodash/sum'

export default function Sum(props) {
  return props.children(sum(props.array))
}

Sum.defaultProps = {
  children: value => value
}