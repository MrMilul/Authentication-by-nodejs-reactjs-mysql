import React from 'react'
import invokeMap from 'lodash/invokeMap'

export default function InvokeMap(props) {
  return props.children(invokeMap(props.collection, props.path, props.args))
}

InvokeMap.defaultProps = {
  children: value => value
}