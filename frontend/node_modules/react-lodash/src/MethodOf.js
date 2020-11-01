import React from 'react'
import methodOf from 'lodash/methodOf'

export default function MethodOf(props) {
  return props.children(methodOf(props.object, props.args))
}

MethodOf.defaultProps = {
  children: value => value
}