import React from 'react'
import unescape from 'lodash/unescape'

export default function Unescape(props) {
  return props.children(unescape(props.string))
}

Unescape.defaultProps = {
  children: value => value
}