import React from 'react'
import lowerFirst from 'lodash/lowerFirst'

export default function LowerFirst(props) {
  return props.children(lowerFirst(props.string))
}

LowerFirst.defaultProps = {
  children: value => value
}