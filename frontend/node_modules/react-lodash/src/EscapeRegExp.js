import React from 'react'
import escapeRegExp from 'lodash/escapeRegExp'

export default function EscapeRegExp(props) {
  return props.children(escapeRegExp(props.string))
}

EscapeRegExp.defaultProps = {
  children: value => value
}