import React from 'react'
import kebabCase from 'lodash/kebabCase'

export default function KebabCase(props) {
  return props.children(kebabCase(props.string))
}

KebabCase.defaultProps = {
  children: value => value
}