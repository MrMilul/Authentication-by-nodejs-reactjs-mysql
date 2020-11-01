import React from 'react'
import setWith from 'lodash/setWith'

export default function SetWith(props) {
  return props.children(setWith(props.object, props.path, props.value, props.customizer))
}

SetWith.defaultProps = {
  children: value => value
}