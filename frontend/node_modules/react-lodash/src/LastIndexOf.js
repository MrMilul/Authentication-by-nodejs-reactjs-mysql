import React from 'react'
import lastIndexOf from 'lodash/lastIndexOf'

export default function LastIndexOf(props) {
  return props.children(lastIndexOf(props.array, props.value, props.fromIndex))
}

LastIndexOf.defaultProps = {
  children: value => value
}