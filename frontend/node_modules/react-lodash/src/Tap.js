import React from 'react'
import tap from 'lodash/tap'

export default function Tap(props) {
  return props.children(tap(props.value, props.interceptor))
}

Tap.defaultProps = {
  children: value => value
}