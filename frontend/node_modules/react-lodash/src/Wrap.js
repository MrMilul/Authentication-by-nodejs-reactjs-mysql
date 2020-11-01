import React from 'react'
import wrap from 'lodash/wrap'

export default function Wrap(props) {
  return props.children(wrap(props.value, props.wrapper))
}

Wrap.defaultProps = {
  children: value => value
}