import React from 'react'
import debounce from 'lodash/debounce'

export default function Debounce(props) {
  return props.children(debounce(props.func, props.wait, props.options))
}

Debounce.defaultProps = {
  children: value => value
}