import React from 'react'
import deburr from 'lodash/deburr'

export default function Deburr(props) {
  return props.children(deburr(props.string))
}

Deburr.defaultProps = {
  children: value => value
}