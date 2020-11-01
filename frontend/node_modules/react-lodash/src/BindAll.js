import React from 'react'
import bindAll from 'lodash/bindAll'

export default function BindAll(props) {
  return props.children(bindAll(props.object, props.methodNames))
}

BindAll.defaultProps = {
  children: value => value
}