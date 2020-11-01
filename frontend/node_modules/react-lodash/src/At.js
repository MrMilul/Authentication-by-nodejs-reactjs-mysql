import React from 'react'
import at from 'lodash/at'

export default function At(props) {
  return props.children(at(props.object, props.paths))
}

At.defaultProps = {
  children: value => value
}