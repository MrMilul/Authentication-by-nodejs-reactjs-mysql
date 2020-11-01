import React from 'react'
import flattenDeep from 'lodash/flattenDeep'

export default function FlattenDeep(props) {
  return props.children(flattenDeep(props.array))
}

FlattenDeep.defaultProps = {
  children: value => value
}