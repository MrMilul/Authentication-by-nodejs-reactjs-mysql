import React from 'react'
import size from 'lodash/size'

export default function Size(props) {
  return props.children(size(props.collection))
}

Size.defaultProps = {
  children: value => value
}