import React from 'react'
import uniq from 'lodash/uniq'

export default function Uniq(props) {
  return props.children(uniq(props.array))
}

Uniq.defaultProps = {
  children: value => value
}