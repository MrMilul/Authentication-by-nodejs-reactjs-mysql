import React from 'react'
import thru from 'lodash/thru'

export default function Thru(props) {
  return props.children(thru(props.value, props.interceptor))
}

Thru.defaultProps = {
  children: value => value
}