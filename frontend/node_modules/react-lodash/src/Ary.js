import React from 'react'
import ary from 'lodash/ary'

export default function Ary(props) {
  return props.children(ary(props.func, props.n))
}

Ary.defaultProps = {
  children: value => value
}