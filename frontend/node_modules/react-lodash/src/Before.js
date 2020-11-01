import React from 'react'
import before from 'lodash/before'

export default function Before(props) {
  return props.children(before(props.n, props.func))
}

Before.defaultProps = {
  children: value => value
}