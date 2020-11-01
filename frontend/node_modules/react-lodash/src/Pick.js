import React from 'react'
import pick from 'lodash/pick'

export default function Pick(props) {
  return props.children(pick(props.object, props.paths))
}

Pick.defaultProps = {
  children: value => value
}