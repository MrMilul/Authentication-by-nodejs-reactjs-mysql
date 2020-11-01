import React from 'react'
import memoize from 'lodash/memoize'

export default function Memoize(props) {
  return props.children(memoize(props.func, props.resolver))
}

Memoize.defaultProps = {
  children: value => value
}