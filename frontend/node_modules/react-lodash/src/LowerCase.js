import React from 'react'
import lowerCase from 'lodash/lowerCase'

export default function LowerCase(props) {
  return props.children(lowerCase(props.string))
}

LowerCase.defaultProps = {
  children: value => value
}