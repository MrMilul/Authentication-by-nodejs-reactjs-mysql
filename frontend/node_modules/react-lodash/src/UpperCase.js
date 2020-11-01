import React from 'react'
import upperCase from 'lodash/upperCase'

export default function UpperCase(props) {
  return props.children(upperCase(props.string))
}

UpperCase.defaultProps = {
  children: value => value
}