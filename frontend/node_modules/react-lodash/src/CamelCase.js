import React from 'react'
import camelCase from 'lodash/camelCase'

export default function CamelCase(props) {
  return props.children(camelCase(props.string))
}

CamelCase.defaultProps = {
  children: value => value
}