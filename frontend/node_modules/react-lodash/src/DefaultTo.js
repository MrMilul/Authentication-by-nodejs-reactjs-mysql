import React from 'react'
import defaultTo from 'lodash/defaultTo'

export default function DefaultTo(props) {
  return props.children(defaultTo(props.value, props.defaultValue))
}

DefaultTo.defaultProps = {
  children: value => value
}