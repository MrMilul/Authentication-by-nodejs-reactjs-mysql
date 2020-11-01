import React from 'react'
import after from 'lodash/after'

export default function After(props) {
  return props.children(after(props.n, props.func))
}

After.defaultProps = {
  children: value => value
}