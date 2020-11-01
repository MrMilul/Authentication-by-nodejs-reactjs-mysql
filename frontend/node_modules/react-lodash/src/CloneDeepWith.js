import React from 'react'
import cloneDeepWith from 'lodash/cloneDeepWith'

export default function CloneDeepWith(props) {
  return props.children(cloneDeepWith(props.value, props.customizer))
}

CloneDeepWith.defaultProps = {
  children: value => value
}