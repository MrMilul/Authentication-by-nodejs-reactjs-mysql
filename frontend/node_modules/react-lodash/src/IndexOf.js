import React from 'react'
import indexOf from 'lodash/indexOf'

export default function IndexOf(props) {
  return props.children(indexOf(props.array, props.value, props.fromIndex))
}

IndexOf.defaultProps = {
  children: value => value
}