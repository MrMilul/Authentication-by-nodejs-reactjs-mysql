import React from 'react'
import escape from 'lodash/escape'

export default function Escape(props) {
  return props.children(escape(props.string))
}

Escape.defaultProps = {
  children: value => value
}