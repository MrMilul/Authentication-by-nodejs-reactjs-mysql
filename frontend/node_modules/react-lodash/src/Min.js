import React from 'react'
import min from 'lodash/min'

export default function Min(props) {
  return props.children(min(props.array))
}

Min.defaultProps = {
  children: value => value
}