import React from 'react'
import constant from 'lodash/constant'

export default function Constant(props) {
  return props.children(constant(props.value))
}

Constant.defaultProps = {
  children: value => value
}