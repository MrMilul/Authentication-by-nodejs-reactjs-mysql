import React from 'react'
import cloneWith from 'lodash/cloneWith'

export default function CloneWith(props) {
  return props.children(cloneWith(props.value, props.customizer))
}

CloneWith.defaultProps = {
  children: value => value
}