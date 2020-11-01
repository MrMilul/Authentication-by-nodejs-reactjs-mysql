import React from 'react'
import extend from 'lodash/extend'

export default function Extend(props) {
  return props.children(extend(props.object, props.sources))
}

Extend.defaultProps = {
  children: value => value
}