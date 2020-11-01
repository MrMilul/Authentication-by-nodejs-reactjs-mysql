import React from 'react'
import unzip from 'lodash/unzip'

export default function Unzip(props) {
  return props.children(unzip(props.array))
}

Unzip.defaultProps = {
  children: value => value
}