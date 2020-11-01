import React from 'react'
import assignWith from 'lodash/assignWith'

export default function AssignWith(props) {
  return props.children(assignWith(props.object, props.sources, props.customizer))
}

AssignWith.defaultProps = {
  children: value => value
}