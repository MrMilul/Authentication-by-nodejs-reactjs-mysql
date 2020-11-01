import React from 'react'
import castArray from 'lodash/castArray'

export default function CastArray(props) {
  return props.children(castArray(props.value))
}

CastArray.defaultProps = {
  children: value => value
}