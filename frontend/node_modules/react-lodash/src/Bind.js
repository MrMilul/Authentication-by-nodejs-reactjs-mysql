import React from 'react'
import bind from 'lodash/bind'

export default function Bind(props) {
  return props.children(bind(props.func, props.thisArg, props.partials))
}

Bind.defaultProps = {
  children: value => value
}