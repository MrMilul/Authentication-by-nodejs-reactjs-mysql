import React from 'react'
import extendWith from 'lodash/extendWith'

export default function ExtendWith(props) {
  return props.children(extendWith(props.object, props.sources, props.customizer))
}

ExtendWith.defaultProps = {
  children: value => value
}